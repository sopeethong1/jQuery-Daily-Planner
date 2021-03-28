
var time = moment().format('dddd, MMMM, Do');
$("#currentDay").text(time);

var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('dddd, MMMM, Do');
}
setInterval(update, 1000);




