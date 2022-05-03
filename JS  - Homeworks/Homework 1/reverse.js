const myText = prompt("Mətni daxil edin: ");
function reverseString(myText) {
  let newText = "";
  for (let i = myText.length - 1; i >= 0; i--) {
    newText += myText[i];
  }
  return console.log(newText);
}
reverseString(myText);
