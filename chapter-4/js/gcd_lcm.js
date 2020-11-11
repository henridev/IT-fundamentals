const intersect = require("./intersect");
const { primeFactorization } = require("./primeFactorization");

function addEveryFoundFactor(PrimeFactorArrOfArrs, passedCountTable = {}) {
  let currentPrimeFactorArr = PrimeFactorArrOfArrs.pop();
  // base case we can return result to multiply
  if (!currentPrimeFactorArr) {
    let result = [];
    const keyvals = Object.entries(passedCountTable);
    keyvals.forEach(([key, val]) => {
      for (let i = 0; i < val; i++) {
        result.push(key);
      }
    });
    return result;
  } else {
    let currentNumberCountTable = {};
    currentPrimeFactorArr.forEach((fctr) => {
      if (currentNumberCountTable[fctr]) currentNumberCountTable[fctr]++;
      else currentNumberCountTable[fctr] = 1;
    });
    const keyvals = Object.entries(currentNumberCountTable);
    keyvals.forEach(([key, val]) => {
      const valInPassedTable = passedCountTable[key];
      if (valInPassedTable) {
        const difference = val - valInPassedTable;
        if (difference > 0) {
          passedCountTable[key] += difference;
        }
      } else {
        passedCountTable[key] = val;
      }
    });
    return addFactorsIfNotPresent(PrimeFactorArrOfArrs, passedCountTable);
  }
}

function productOfArrElement(arr) {
  let result = 1;
  arr.forEach((item) => (result *= item));
  console.log("productOfArrElement :>> ", result);
  return result;
}

// greatest common denominator function (gcd) - dutch (ggd)
function gcd(nrs) {
  const sortedPrimeFactors = primeFactorization(nrs);
  let intersection = intersect(sortedPrimeFactors[0], sortedPrimeFactors[1]);
  for (let y = 2; y < sortedPrimeFactors.length; y++) {
    const primeFactorArr = sortedPrimeFactors[y];
    intersection = intersect(intersection, primeFactorArr);
  }
  return productOfArrElement(intersection);
}

// least common multiplicator function (lcm) - ductch (kgv)
// find every factor of the number but don't duplicate
function lcm(nrs) {
  const sortedPrimeFactors = primeFactorization(nrs);
  const factorsArr = addEveryFoundFactor(sortedPrimeFactors, {});
  return productOfArrElement(factorsArr);
}

gcd([100, 200, 250]);
lcm([100, 250]);
