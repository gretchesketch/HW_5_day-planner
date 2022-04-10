// displays current day
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDay);

$(document).ready(function (){
  // save button
  $(".saveBtn").on("click", function () {
    // gets value from description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // this stores users input in local storage 
    localStorage.setItem(time, text);
  })

  // this changes the colors based on the current time in the day to represent past, present, and future.
function colorChanger() {
  //current time in hours
  var currentTime = moment().hour();
// loops through time blocks
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id"));

    if (timeBlock < currentTime) {
      $(this).addClass("past");
    } else if (timeBlock === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });
}
//gets text from local storage if they were saved
$("#h1 .description").val(localStorage.getItem("h1"));
$("#h2 .description").val(localStorage.getItem("h2"));
$("#h3 .description").val(localStorage.getItem("h3"));
$("#h4 .description").val(localStorage.getItem("h4"));
$("#h5 .description").val(localStorage.getItem("h5"));
$("#h6 .description").val(localStorage.getItem("h6"));
$("#h7 .description").val(localStorage.getItem("h7"));
$("#h8 .description").val(localStorage.getItem("h8"));
$("#h9 .description").val(localStorage.getItem("h9"));

colorChanger();
});