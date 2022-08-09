//Use moment.js library to display current day & time.(24 hour format!)
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

//saveBtn function to save the inputvalue in the local stprage
$(".saveBtn").on("click", function () {
    console.log(this);
    var inputvalue = $(this).siblings(".description").val();
    console.log(inputvalue);

    var keyvalue = $(this).parent().attr("id");
    console.log(keyvalue);

    var inputEl = $(this).siblings(".description")
    console.log(inputEl);

    //Use jQuery to set items in the local storage
    localStorage.setItem(keyvalue, inputvalue);
    var inputEl =localStorage.getItem("keyvalue");


    // Reference link: https://www.codegrepper.com/code-examples/javascript/javascript+localstorage+getitem //
    // Refeeence link: https://www.w3schools.com/jsref/prop_win_localstorage.asp//
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#13pm .description").val(localStorage.getItem("1pm"));
    $("#14pm .description").val(localStorage.getItem("2pm"));
    $("#15pm .description").val(localStorage.getItem("3pm"));
    $("#16pm .description").val(localStorage.getItem("4pm"));
    $("#17pm .description").val(localStorage.getItem("5pm"));
    $("#18pm .description").val(localStorage.getItem("6pm"));
})

//Use moment.js fomate to create this function to get current number of hours.
function hourTracker() {
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour, currentHour);

        if (blockHour < currentHour) {
            $(this).find("input").addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).find("input").addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            $(this).find("input").addClass("future");
        }
    });
}
// Go back to the hourTracker function
hourTracker();



// var saveBtn=document.querySelectorAll(".saveBtn"); Same as $(".saveBtn")