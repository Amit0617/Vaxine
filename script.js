let pin = document.getElementById("pin").value;
let givendate = document.getElementById("date").value;

function getFromPin() {
/*    var url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+pin+"&date="+date+"";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");
    

xhr.onload = function() {
    var data = JSON.parse(this.responseText);
    //var address = obj.address;     
    //let text = "<table border='3'>"
    //for (let x in myObj) {
    //  text += "<tr><td>" + myObj[x].name + "</td></tr>";
    //}
    //text += "</table>"
    let template = {'<>':'div','html':'${center_id} ${name} ${address} ${pincode} ${from} ${to} ${fee_type} ${fee}'};
    document.getElementById("vaccinecenters").innerHTML = data.body;
    document.write(json2html.render(data,template));
  };

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();

};*/
return axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pin+'&date='+givendate+'';).then(function(response){console.log(response).catch(function (error) {
    console.log(error);}).then(function () {// always executed;});
};
