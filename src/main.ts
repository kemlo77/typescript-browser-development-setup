function myFunction(): void {
    const inputElement = (document.getElementById("textInput") as HTMLInputElement);
    const inputText = inputElement.value;
    const reversedText = reverseText(inputText);
    inputElement.value = reversedText;
}

function reverseText(str: string): string {
    return str.split("").reverse().join("");
}