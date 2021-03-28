var eventEL = $("#textarea");
var save = $("#saveBtn");
var hour = $("#hour");
var time = moment().format('dddd, MMMM, Do');
$("#currentDay").text(time);
var times = $('.time-block');
var bookTime="";
var bookDate="";
var saveBooks;
var tempArray = [];
var currentHour = moment().hours;


var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('dddd, MMMM, Do');
}
$(document).ready(function () {
  var date = moment().format('dddd MMMM Do');

  $('#currentDay').text(date);
})

  $("#container-box").css({"background-color":"white", " border-bottom-color" :"black", "padding" : 0, "margin-bottom": "40px"});
  $("#line").css ({"border-width": "10px", "border-color": "black"});


  function renderBooks() {
    storeBooks = JSON.parse(localStorage.getItem("saveBooks"));
    if (storeBooks !== null) {
        for (i = 0; i < storeBooks.length; i++) {
            returnedBooks = storeBooks[i];
            details = returnedBooks.details;
            timeIndex = returnedBooks.time;
            timeIndex = timeIndex.replace("");
            if (details !== null) {
                $("#" + timeIndex).children('div').children('div').children('textarea').val(details);
            }
        }
    }
}

renderBooks();

for (i = 0; i <= 23; i++) {
    eventEL = i;
    if (currentHour == i) {
        $('#' + eventEL).addClass("present");
        $('#' + eventEL).children('div').children('div').children("textarea").addClass("present");
    }
    else if (currentHour > i) {
        $('#' + eventEL).addClass("past");
        $('#' + eventEL).children('div').children('div').children("textarea").addClass("past");
    }
    else {
        $('#' + eventEL).addClass("future");
        $('#' + eventEL).children('div').children('div').children("textarea").addClass("future");
    }
}

$(".saveBtn").click(function (event) {
  event.preventDefault()
bookText = $(this).parent('div').children('div').children("textarea").val();
bookTime = $(this).parent('div').parent().attr("id");
appointment = {
    time: bookTime,
    details: bookText
}
tempArray = JSON.parse(localStorage.getItem("saveBooks"));
if (tempArray === null) {
    localStorage.setItem('aveBooks', JSON.stringify([{ time: bookTime, details: bookText }]));
}
else {
    tempArray.push(appointment);
    localStorage.setItem("aveBooks", JSON.stringify(tempArray));

}
$(this).parent('div').children('div').children('textarea').replace($('<textarea>' + bookText.addClass("textarea") + '</textarea>'));
})
