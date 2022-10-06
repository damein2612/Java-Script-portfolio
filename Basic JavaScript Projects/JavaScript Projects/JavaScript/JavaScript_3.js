// this is a Data Attribute //
function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");

    document.getElementById("DisplayType").innerHTML = characterType;
}