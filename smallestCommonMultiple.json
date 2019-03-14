function smallestCommons(arr) {
  let newArr = arr.sort((a,b) => a-b);
  let divisible = [];
  for (let i = newArr[0]; i <= newArr[1]; i++){
    divisible.push(i);
  }
  console.log(divisible + " divisible arr");
  let mdc = newArr.reduce((a,b) => {
    let resto = 1;
    while (resto !== 0){
    let resto = b % a;
     if (resto > 0){
      b = a;
      a = resto;
    }
  }
    return a;
  });
  let mmc = newArr.reduce((a,b) => {
    return a*b/mdc;
  })
  console.log(mmc + " mmc");
  let result = ((a) => {
    let counter = false;
    for (let i = 2, counter = false; counter === false; i++){    
    let possible = (a*i);
      for (let j = 0, counting = 0; j < divisible.length; j++){
        if (possible % divisible[j] === 0) {
          counting++;
          if (counting === divisible.length){
            return possible;
          }      
        }
      }
    }
  });
  console.log(result(mmc));
  return result(mmc);
}
smallestCommons([1,13]);