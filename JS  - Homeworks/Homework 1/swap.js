var eded1 = Number(prompt("Ilk ədədi daxil edin: "));
var eded2 = Number(prompt("Ikinci ədədi daxil edin: "));

console.log("Dəyişiklikdən əvvəl: ");
console.log("İlk ədəd: " + eded1);
console.log("İkinci ədəd: " + eded2);

eded1 = eded1 * eded2;
eded2 = eded1 / eded2;
eded1 = eded1 / eded2;

console.log("Dəyişiklikdən sonra: ");
console.log("İlk ədəd: " + eded1);
console.log("İkinci ədəd: " + eded2);
