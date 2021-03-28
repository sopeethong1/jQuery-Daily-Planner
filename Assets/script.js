var hour = $("#hour");
var event = $("#eventplaceholder");
var save = $("#save");




var time = moment().format('dddd, MMMM, Do');
$("#currentDay").text(time);

var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('dddd, MMMM, Do');
}
setInterval(update, 1000);


$("#container-box").css({"background-color":"white", " border-bottom-color" :"black", "padding" : 0, "margin-bottom": "40px"});
$("#hr").css ({"border-width": "10px", "border-color": "black"});

