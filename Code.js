function getData() {
    var spreadsheet = SpreadsheetApp.openById("1k_Z7HfQFlab63qnImIWZCc57THR10f-qGFBba9OLldw");
    var sheet = spreadsheet.getSheetByName("Page1");
    var range = sheet.getDataRange();
    var values = range.getValues();

    
    var data = [];
    for (var i = 0; i < values.length; i++) {
        var rowData = values[i];
        var fines = parseFloat(rowData[14]); // Assuming fines are in the 15th column (adjust accordingly)
        if (!isNaN(fines)) {
            totalFines += fines;
        }
        var imageURL = "https://images.app.goo.gl/uaaZDiXEwRUXqqh87"; // Corrected the typo
        rowData.push(imageURL); // Add image URL to the end of the rowData array
        data.push(rowData);
    }

    return data;
}
