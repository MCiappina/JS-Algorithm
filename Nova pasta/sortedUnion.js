function uniteUnique(arr) {
  let result = [];
  for (let i = 0; i < arguments.length; i++){
  	arguments[i].map((el) => {
    	if (!result.includes(el)){
    		result.push(el);
    	}
    });
  }
  return result;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);