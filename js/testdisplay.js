$(document).ready(function(){
    var options = {'showRowNumber': true};
    var data;
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1Zmv3rD1P3ld7eNNNxUf1RcO1L9nwC4UOLArzv/edit#gid=0');
 
    function sendAndDraw() {
        // Send the query with a callback function.
        query.send(handleQueryResponse);
    }
 
    function handleQueryResponse(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }
        data = response.getDataTable();
        new google.visualization.Table(document.getElementById('ideaTable')).draw(data, options);
    }
 
    google.setOnLoadCallback(sendAndDraw);
});