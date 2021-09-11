var pin = document.getElementById("pin").value;
var date = document.getElementById("date").value;


function getFromPin() {
    var url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+ pin+"&date="+date+"";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");

xhr.onload = function() {
    var list = [JSON.parse(this.responseText)];
    var cols = Headers(list, selector);
    // Traversing the JSON data
            for (var i = 0; i < list.length; i++) {
                var row = $('<tr/>');   
                for (var colIndex = 0; colIndex < cols.length; colIndex++)
                {
                    var val = list[i][cols[colIndex]];
                      
                    // If there is any key, which is matching
                    // with the column name
                    if (val == null) val = "";  
                        row.append($('<td/>').html(val));
                }
                  
                // Adding each row to the table
                $(selector).append(row);
            }
    
    function Headers(list, selector) {
            var columns = [];
            var header = $('<tr/>');
              
            for (var i = 0; i < list.length; i++) {
                var row = list[i];
                  
                for (var k in row) {
                    if ($.inArray(k, columns) == -1) {
                        columns.push(k);
                          
                        // Creating the header
                        header.append($('<th/>').html(k));
                    }
                }
            }
              
            // Appending the header to the table
            $(selector).append(header);
                return columns;
        }       
    //let text = "<table border='3'>"
    //for (let x in myObj) {
    //  text += "<tr><td>" + myObj[x].name + "</td></tr>";
    //}
    //text += "</table>"
    //document.getElementById("vaccinecenters").innerHTML = text;
  }

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();

}
