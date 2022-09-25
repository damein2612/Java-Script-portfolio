document.write(typeof 3);               //"type of" Operator //

document.write(typeof "Word");

document.write("10" + 5);           //type coercion//

document.write(2E310);          //infinity//

document.write(-3E310);             // negatibe Infinity //

document.write(8 > 3);           //boolean comparison  true/false conditions//

document.write(8 < 3);

console.log(4 + 4);           // console log method //

console.log(9 < 3);             //boolean logic and console.log()method//

document.write(9 == 9);         // double equal sign//

document.write(4 == 9);

X = 42;                                 // triple equal signs matching data matching value //
Y = 42;
document.write (X === Y);

X = "49";                                // triple equal signs diffirent data diffirent value //
Y = 42;
document.write (X === Y);

X = "42";                           // triple equal signs diffirent data matching value //
Y = 42;
document.write (X === Y);

X = "41";                           // triple equal signs matching data diffirent value //
Y = "42";
document.write (X === Y);

document.write(9 > 4 && 10 > 5);            // boolean logical operators And written as :&&  //

document.write(9 > 4 && 10 < 5);

document.write(9 < 4 || 10 > 5);              // boolean logical operators OR written as :||  //

document.write(9 < 4 || 10 < 5);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);       // boolean logical NOT operators written as :! before ()  //

}

function not_Function1() {
    document.getElementById("Not_1").innerHTML = !(5 < 10);
}