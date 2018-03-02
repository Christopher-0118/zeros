module.exports = function getZerosCount(number) {
  let maxDegree = Math.floor(Math.log(number) / Math.log(5));
  let currentNum = 5;
  let zerosCount = 0;

  for( let currentDegree = 1; currentDegree <= maxDegree; currentDegree++) {
    zerosCount +=  Math.floor(number / currentNum);
    currentNum = currentNum * 5;
  }
  return zerosCount;
}
