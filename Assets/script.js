// var hour = $("#hour");
var event = $("#eventplaceholder");
var save = $("#saveBtn");
var time = moment().format('dddd, MMMM, Do');
$("#currentDay").text(time);

var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('dddd, MMMM, Do');
}
setInterval(update, 1000);   

$(document).ready(function () {
     moment().hour(i)
     var hours = parseInt($(this).attr('#hour'));

   for (var i = 9; i <= 10; i++) {
       console.log(moment().hour(i).locale('en').format('hA'));
         $('.hour').text(moment().hour(i).locale('en').format('hA'))

function currentTime() {
    var current = moment().hours()
    var time = $(".row");

       console.log(time);

    time.each(function () {
      var hour = parseInt($(this).attr('id'))

      if (hour === current) {
        $(this).children('.col-sm-8').attr('class', 'present col-sm-8 description')
      } else if (current > hour) {
        $(this).children('.col-sm-8').attr('class', 'past col-sm-8 description')
      } else {
        $(this).children('.col-sm-8').attr('class', 'future col-sm-8 description')
    }
})
}
