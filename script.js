var pin = document.getElementById("pin").value;
var date = document.getElementById("date").value;

/*function getFromPin() {
    var url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+ pin+"&date="+date+"";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");
    

xhr.onload = function() {
    var json = JSON.parse(this.responseText);
$(document).ready(function () {
    //var json = [{"uuid":"ba6df9ff-84fa-464b-a231-d36782a7fdba","username":"zFrost87","kills":"19","deaths":"6","broken":"34","placed":"34","fish":"15","onlinetime":"9493","mobskilled":"6","crops":"1"},{"uuid":"b07762f3-38a4-45b7-9f21-6147704aee4b","username":"frechette456","kills":"3","deaths":"11","broken":"33","placed":"61","fish":"0","onlinetime":"1251","mobskilled":"1","crops":"7"},{"uuid":"83af0a86-7c09-4c32-8fa5-65db3c50b4cf","username":"MineManFrost","kills":"1","deaths":"2","broken":"16","placed":"1","fish":"0","onlinetime":"238","mobskilled":"0","crops":"0"},{"uuid":"71cb5612-d586-4390-ad78-05d295d6d2bd","username":"Nikolassparrow","kills":"0","deaths":"2","broken":"1","placed":"2","fish":"0","onlinetime":"30","mobskilled":"0","crops":"0"},{"uuid":"c34f51b5-8f2a-4e08-8b83-99d5faf21ea9","username":"SetupS1CK","kills":"0","deaths":"0","broken":"0","placed":"0","fish":"0","onlinetime":"81","mobskilled":"0","crops":"0"},{"uuid":"80212863-9466-4a4b-852e-5812e77d075b","username":"PickCottonNig","kills":"0","deaths":"0","broken":"0","placed":"0","fish":"0","onlinetime":"835","mobskilled":"0","crops":"0"},{"uuid":"a64de20f-91e7-4bb0-80db-4f7f1614d693","username":"OstenGaming","kills":"0","deaths":"0","broken":"1","placed":"0","fish":"0","onlinetime":"213","mobskilled":"0","crops":"0"},{"uuid":"25c60209-9fd4-42b8-a2b7-d78e01c0b3ae","username":"OpTc","kills":"0","deaths":"0","broken":"0","placed":"0","fish":"0","onlinetime":"9","mobskilled":"0","crops":"0"},{"uuid":"3a1dc4c7-e9ec-425e-ad50-54ae37c5f1a7","username":"AutoDolphin","kills":"0","deaths":"11","broken":"20","placed":"1","fish":"0","onlinetime":"444","mobskilled":"0","crops":"0"}];
    var tr, th;
    //var order = ['username', 'kills', 'deaths', 'broken', 'placed', 'fish', 'onlinetime', 'mobskilled', 'crops'];
    var order = ['center_id', 'name', 'address', 'pincode', 'from', 'to', 'fee_type', 'available_capacity', 'fee', 'vaccine', 'slots'];
    for (var i = 0; i < json.length; i++) {
      tr = $('<tr/>');
      th = $('<tr/>');
      
      if (i === 0) { // create table headers               
        for (var j = 0; j < order.length; j++) { 
          th.append("<th>" + order[j] + "</th>");
          $('table').append(th)
        }         
      }     
      
      for (var j = 0; j < order.length; j++) { 
        tr.append("<td>" + json[i][order[j]] + "</td>");
        $('table').append(tr);      
      }
    }
});
*/
function getFromPin() {
    var url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+ pin+"&date="+date+"";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");
    

xhr.onload = function() {
    var obj = JSON.parse(xhr.responseText);
    //var address = obj.address;     
    //let text = "<table border='3'>"
    //for (let x in myObj) {
    //  text += "<tr><td>" + myObj[x].name + "</td></tr>";
    //}
    //text += "</table>"
    document.getElementById("vaccinecenters").innerValue = obj.body;
  }

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();

};
