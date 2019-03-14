function convertHTML(str) {
  const htmlRegex = new RegExp(/\s([&<>"'])\s/g)
  let arr = str.split(htmlRegex);
  console.log(arr);
  arr.map((item) => {
    if(item === "<"){
      arr[arr.indexOf(item)] = "&lt;";
    } else if(item === ">"){
      arr[arr.indexOf(item)] = "&gt;";
    } else if(item === "&"){
      arr[arr.indexOf(item)] = "&amp;";
    } else if(item === `"`){
      arr[arr.indexOf(item)] = "&quot;";
    } else if(item === "'"){
      arr[arr.indexOf(item)] = "&quot;";
    }
  });
  str = arr.join(" ");
  console.log(str);
  return str;
}

convertHTML("Hamburgers < Pizza < Tacos");