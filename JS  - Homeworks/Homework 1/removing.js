const myArr = [];
let myArrSize = Number(prompt("Arrayin element sayini daxil edin: "));
for (let i = 0; i < myArrSize; i++) {
  var arrayElement = Number(
    prompt("Arrayin " + i + " -ci elementini  daxil edin")
  );
  myArr[i] = arrayElement;
}
function removeDublicate(myArr) {
  const mySet = new Set(myArr);
  return console.log(mySet);
}
removeDublicate(myArr);
