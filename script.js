var current = document.getElementById("currentDay")


//using moments.js to get the current day and time layout.
var current = moment().format('dddd, MMM Do YYYY');
$("#current").html(current);

moment().year(year).month(month).date(day)