// START renders current date and time in the jumbotron
setInterval(function () {
    var currentDate = moment().format('dddd, MMM/DD/YYYY, hh:mm:ss a ');
    $('#current-day').text(currentDate);
}, 1000);
// END of current time and date in the jumbotron

// START Color Changing
    // declare the id of timeblocks id's
var idArr = ['#8', '#9', '#10', '#11', '#12', '#13', '#14', '#15', '#16', '#17'];

    // declare current hour and format to same form as eventHour
var currentHour = parseInt(moment().format('H'));
