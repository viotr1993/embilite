function scatterPlot(data, container) {
    // X: log2FoldChange, Y: padj
    const down = {
        x: [],
        y: [],
        mode: 'markers',
        type: 'scatter',
        name: 'Down regulated',
        text: [],
        marker: { size: 12 }
    };
    const up = {
        x: [],
        y: [],
        mode: 'markers',
        type: 'scatter',
        name: 'Up regulated',
        text: [],
        marker: { size: 12 }
    };
    const nonsig = {
        x: [],
        y: [],
        mode: 'markers',
        type: 'scatter',
        name: 'Nonsignificant',
        text: [],
        marker: { size: 12 }
    };
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        let trace = null;
        if (obj['log2FoldChange'] >= 1.0 && obj['padj'] <= 0.05) {
            trace = up;
        } else if (obj['log2FoldChange'] <= -1.0 && obj['padj'] <= 0.05) {
            trace = down;
        } else {
            trace = nonsig;
        }
        trace.x.push(obj['log2FoldChange']);
        trace.y.push(obj['padj']);
        trace.text.push(obj['gene_name']);
        trace = null;
    }
    const traces = [ down, nonsig, up ];
    const layout = {
        xaxis: {
            range: [ 0.75, 5.25 ]
        },
        yaxis: {
            range: [0, 8]
        },
        title:'My first plot'

    };
    Plotly.newPlot(container, traces, layout);
}
