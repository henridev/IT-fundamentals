function binToDec(binString, i = 1) {
  const binArray = binString.split(".")[1].split("");
  let carryOver = Number(binArray[0]);
  while (i < binArray.length) {
    // debugger;
    carryOver = carryOver / 2 + Number(binArray[i]);
    i++;
  }
  return carryOver / 2;
}

function decToBin(dec, i = 1) {
  let bin = "0.";
  let carryOver = dec * 2;
  bin += String(Math.floor(carryOver));
  carryOver %= 1;
  while (carryOver % 1 != 0) {
    carryOver *= 2;
    bin += String(Math.floor(carryOver));
    carryOver %= 1;
    i++;
  }
  return bin;
}

console.log("result", binToDec("0.1000001"));
console.log("result", decToBin(0.375));
