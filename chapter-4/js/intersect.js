function intersect(arrL, arrS) {
  let intersection = [];
  for (const val of arrL) {
    const foundI = arrS.findIndex((e) => e === val);
    if (foundI !== -1) {
      intersection.push(arrS[foundI]);
      arrS.splice(foundI, 1);
    }
  }
  return intersection;
}

module.exports = intersect;
