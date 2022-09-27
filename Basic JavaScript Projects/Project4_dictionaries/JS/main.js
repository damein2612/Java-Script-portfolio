
function my_Dictionary() {       //this is a key-value pair //
    var Animal = {
        Species:"Frog",
        Color:"Green",
        Type:"Tree_Frog",
        Age: 6,
        Sound:"Peep"
    };
    delete(Animal.Sound);
    document.getElementById("Dictionary").innerHTML = Animal.Sound;     // statement key id deleted//
}