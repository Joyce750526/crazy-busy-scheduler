//When the saveBtn is clicked, we need to save the values from the input in this local storage, with a key name that matched the hour timeblock, 
$(".saveBtn").on("click", function(){
console.log(this);
var inputvalue=$(this).siblings(".description").val();
console.log(inputvalue);

var keyvalue=$(this).parent().attr("id");
console.log(keyvalue);

var inputEl=$(this).siblings(".description")
console.log(inputEl);
//jQuery to set items in the local storage
localStorage.setItem(keyvalue,inputvalue);

// //jQuery to get the corrent ID of a data from the local storage. 
// Reference link: https://www.codegrepper.com/code-examples/javascript/javascript+localstorage+getitem //
// Refeeence link: https://www.w3schools.com/jsref/prop_win_localstorage.asp//
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));
$("#6pm .description").val(localStorage.getItem("6pm"));
})


//get current number of hours.
// loop over time blocks





// var saveBtn=document.querySelectorAll(".saveBtn"); Same as $(".saveBtn")