var pin = document.getElementById("pin").value;
var date = document.getElementById("date").value;


function getFromPin() {
    var url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+ pin+"&date="+date+"";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");

xhr.onload = function() {
    var text = [JSON.parse(this.responseText)];
          
    //let text = "<table border='3'>"
    //for (let x in myObj) {
    //  text += "<tr><td>" + myObj[x].name + "</td></tr>";
    //}
    //text += "</table>"
    document.getElementById("vaccinecenters").innerHTML = text;
  }

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();

}
