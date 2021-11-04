import './style.css';
import { reverseText } from './reverse';

function myFunction(): void {
    const inputElement = (document.getElementById("textInput") as HTMLInputElement);
    const inputText = inputElement.value;
    const reversedText = reverseText(inputText);
    inputElement.value = reversedText;
}

document.getElementById('reverseButton').addEventListener('click', () => myFunction());