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
// iterate thru all event blocks
for (let i = 0; i < idArr.length; i++) {
    var findTB = $(idArr[i]);

    // declare a var that selects the hour from each time-block and format it
    var eventHour = findTB.siblings('.hour').text().trim();
    eventHour = parseInt(moment(eventHour, 'h:mm A').format('H'));

    // setting conditions to change the colors of time-blocks
    if (currentHour === eventHour) {
        findTB.addClass('present').removeClass('past future');
    } else if (currentHour > eventHour) {
        findTB.addClass('past').removeClass('present future disabled');
    } else {
        findTB.addClass('future').removeClass('past present');
    };
}
// END color changing based on time

// START edit events in time-blocks 
    // on click change time-block into textarea to add events
    $(".disabled").on('click', function () {
        console.log(this);
        //  var to select the existing text
        var text = $(this).text().trim();
        // var to create new textarea
        var textP = $("<textarea>")
            .addClass("textInput")
            .text(text);
        // add textarea to the dom
        $(this).children('p').replaceWith(textP);
        textP.trigger("focus");
    });

    
    // change textarea back to p when clicked anywhere else
$(".disabled").on("blur", "textarea", function () {
    var text = $(this).val().trim();
    var p = $("<p>")
        .addClass("textInput")
        .text(text);
    $(this).replaceWith(p);
});
// END edit events in time-blocks