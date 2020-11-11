const primes = [2, 3, 5, 7, 11, 13];
function primeFactorization(nrs) {
  let primeFactorizations = [];
  let x;
  nrs.forEach((nr, i) => {
    x = 0;
    primeFactorizations[i] = [];
    while (nr > 1) {
      const currentPrime = primes[x];
      if (nr % currentPrime === 0) {
        nr /= currentPrime;
        primeFactorizations[i].push(currentPrime);
      } else {
        x++;
      }
    }
    if (nr < 1) {
      primeFactorizations[i].push(nr * primes[x]);
    }
  });
  // sort from large to small
  primeFactorizations = primeFactorizations.sort((a, b) => b.length - a.length);

  return primeFactorizations;
}

module.exports = {
  primes,
  primeFactorization,
};
