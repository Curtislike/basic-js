const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformed = [];
  if(Array.isArray(arr) != true){
    throw new Error();
  }
  else if(arr.length == 0){
    return arr;
  }
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] == '--discard-next') {
      i++;
    }
    else if(arr[i] == '--discard-prev') {
      if(i>0 && transformed.length>0 && arr[i-2] != '--discard-next'){transformed.pop();}
    }
    else if(arr[i] == '--double-next') {
      if(i< arr.length-1){
      transformed.push(arr[i+1]);}
    }
    else if(arr[i] == '--double-prev' ) {
      if(arr[i-2] != '--discard-next' && i>0){ transformed.push(arr[i-1]);
      }
    }
    else{
      transformed.push(arr[i]);
    }
  }
  return transformed;
};