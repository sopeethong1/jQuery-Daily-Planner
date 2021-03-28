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
$("#line").css ({"border-width": "10px", "border-color": "black"});

function currentTime() {
    var current = moment().hours()
    var time = $("#row");

    //    console.log(current);

    time.each(function () {
      var hour = parseInt($(this).attr('id'))

    //  console.log(hour);

      if (hour === current) {
        $(this).children('.col-sm-8').attr('class', 'present col-sm-10 description')
    //    console.log(('present' + hour + current))
      } else if (current > hour) {
        $(this).children('.col-sm-8').attr('class', 'past col-sm-10 description')
    //    console.log(('past' + hour + current))
      } else {
        $(this).children('.col-sm-8').attr('class', 'future col-sm-10 description')
    //    console.log(('future' + hour + current))
      }
    })
  }
  currentTime()





