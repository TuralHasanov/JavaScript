//İnput a Number
const eded = Number(prompt("Ədədi daxil edin: "));

//Function Start
function isPrime(eded) {
  let isPrime = true;
  if (eded === 1) {
    console.log("1 nə sadə, nə də mürəkkəb ədəd deyil!");
  } else if (eded > 1) {
    for (let i = 2; i < eded; i++) {
      if (eded % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${eded} sadə ədəddir!`);
    } else {
      console.log(`${eded} mürəkkəb ədəddir!`);
    }
  } else {
    console.log("Müsbət ədəd daxil etməlisiniz!");
  }
}
isPrime(eded);
