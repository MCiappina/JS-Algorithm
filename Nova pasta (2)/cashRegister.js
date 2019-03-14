function checkCashRegister(price, cash, cid) {
  var change = (cash - price);
  let billNames = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  let resultObject = {status: "INSUFFICIENT_FUNDS", change: []};
  let changeArr = [];
  let provaReal = [];
  let newArr = [];
  let funds = cid.forEach((a) => {
    return newArr.push(a[1]);
  });
  funds = newArr.reduce((a, b) => {
    return (a + b);
  });
  newArr = newArr.reverse();
  let billValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100].reverse();
  for (let i = 0; i < billValues.length; i++) {
    if (change > billValues[i] && newArr[i] >= billValues[i]) {
      let max = parseInt(change / billValues[i]);
      let billsArr = [];
      let maxChange = Math.min(newArr[i], change);
      for (let j = 1; j <= max; j++) {
        let result = billValues[i] * j;
        billsArr.push(result);
      }
      let resultChange = Math.max.apply(Math, billsArr.filter(function (x) { return x <= maxChange; }));
      provaReal.push(resultChange);
        changeArr.push([billNames[i], resultChange]);
        change = (change - resultChange).toFixed(2);      
    }
  }
  if (change === "0.00"){
    resultObject.status = "OPEN";
    resultObject.change = changeArr;
    if ((cash - price) === funds){
      resultObject.status = "CLOSED";
      resultObject.change = cid;
    } 
  }
  return resultObject;
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);