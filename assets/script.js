//display current day & time. Using moment.js library
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

//When the saveBtn is clicked, we need to save the values from the input in this local storage, with a key name that matched the hour timeblock, 
$(".saveBtn").on("click", function () {
    console.log(this);
    var inputvalue = $(this).siblings(".description").val();
    console.log(inputvalue);

    var keyvalue = $(this).parent().attr("id");
    console.log(keyvalue);

    var inputEl = $(this).siblings(".description")
    console.log(inputEl);
    //jQuery to set items in the local storage
    localStorage.setItem(keyvalue, inputvalue);

    // //jQuery to get the corrent ID of a data from the local storage. 
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

//get current number of hours.
// loop over time blocks

function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour(); // use of moment.js


    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour, currentHour);

        //check if we've moved past this time, click into css/html given classes of past, present, or future
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

hourTracker(); //re-run 



// var saveBtn=document.querySelectorAll(".saveBtn"); Same as $(".saveBtn")