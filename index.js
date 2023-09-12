
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];




let totalBatteries = batteryBatches.reduce(function(num1, num2){
    return num1 + num2;
  });
  


  /*console.log(couponLocations.reduce(couponCounter, 0));

  const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
      return element * 2 + accumulator;
    }, 0);
  
  
  
    const letters = ["a", "b", "c", "b", "a", "a"];
  
    const lettersCount = letters.reduce(function (countObj, currentLetter) {
      if (currentLetter in countObj) {
        countObj[currentLetter]++;
      } else {
        countObj[currentLetter] = 1;
      }
      return countObj;
    }, {});
    
    console.log(lettersCount);
  
    
  
  const totalBatteries = batteryBatches.reduce(function (accumulator, element){
  return element + accumulator;
  },0);*/
  
