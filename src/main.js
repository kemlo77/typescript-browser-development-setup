function myFunction() {
    var inputText = document.getElementById("textInput").value;
    var reversedText = reverseText(inputText);
    document.getElementById("textInput").value = reversedText;
}

function reverseText(str) {
    return str.split("").reverse().join("");
}