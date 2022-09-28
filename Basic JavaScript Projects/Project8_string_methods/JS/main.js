function full_Sentence() {                  // this is the concat method //
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate") .innerHTML = whole_sentence;
}

function slice_Method(){   //this is the Slice Method //
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function toUppercase_Method(){      //this is the Uppercase Method //
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var upper = Sentence.toUpperCase();
    document.getElementById("Uppercase").innerHTML = upper;
}

function search_Method(){     //this is the Search Method //
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var look_up = Sentence.search("no play");
    document.getElementById("Uppercase").innerHTML = look_up;
}

function string_Method(){                    //this is the String Method //
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method(){                 //this is the Precision Method //         
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function Fixed_Method(){                 //this is the Fixed Method //         
    var X = 12938.3012987376112;
    var fixed_up = X.toFixed();
    document.getElementById("Fixed").innerHTML = fixed_up;
}

function valueof_Method(){                 //this is the Valueof Method //         
    var X = 12938.3;
    var value = X.valueOf();
    document.getElementById("valueof").innerHTML = value;
}