function csv2json(csvString) {
    const rows = csvString.split("\n");
    const headers = rows[0].split(",");
    const jsonData = [];
    for (let i = 1; i < rows.length; i++) {
        if (rows[i].length == 0) continue;
        const values = rows[i].split(",");
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
            const key = headers[j].trim();
            const value = values[j].trim();
            obj[key] = value;
        }
        console.log(obj);
        jsonData.push(obj);
    }
    return jsonData;
}

function parseEmbiData(csvString) {
    const json = csv2json(csvString);
    // Transform data object.
    const result = [];
    for (let i = 0; i < json.length; i++) {
        const obj = json[i];
        console.log(obj);
        const dobj = { 'gene_id': obj['"gene_id"']
                     , 'log2FoldChange': obj['"log2FoldChange"']
                     , 'padj': obj['"padj"']
                     , 'gene_name': obj['"gene_name"']
                     , 'gene_biotype': obj['"gene_biotype"']
                     };
        result.push(dobj);
    }
    return result;
}
