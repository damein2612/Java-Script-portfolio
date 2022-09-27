var X = 10;                 //this is a Global Variable //
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();



function Add_numbers_3() {          //this is a local Variable //
var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_5() {              //this is function with error use chrome dev tools //
    var X = 10;
        console.log(15 + X);
    }
    function Add_numbers_6() {
        console.log(X + 100);
    }
    Add_numbers_1();
    Add_numbers_2();


    function get_Date() {               // This is a IF STATEMENT //
        if (new Date() .getHours() < 18) {
            document.getElementById("Greeting") .innerHTML = "How are you today?";
        }
    }

    function get_month() {               // This is a IF STATEMENT also //
        if (new Date() .getDate() < 29) {
            document.getElementById("Greeting1") .innerHTML = "How are you today?";
        }
    }

    function Age_Function() {               //this is a Else Statement//
        Age = document.getElementById("Age").value;
        if (Age >=18) {
            Vote = "You are old enough to vote!";
        }
        else {
            Vote = "You are not old enough to vote!";
        }
        document.getElementById("How_old_are_you?").innerHTML = Vote;
    }

    function Time_function() {          //This is the IF and Else  Statement//
        var Time = new Date() .getHours();
        var Reply;
        if (Time < 12 == Time > 0) {
            Reply = "It is afternoon.";
        }
        else {
            Reply = "It is evening time.";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
    }