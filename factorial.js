function factorial(num) {
  let product = 1;
  if (num < 0) {
    throw Error;
  }
  else if (num > 0) {
    for (let i = 1; i <= num; i++){
      product *= i;
    }
  }
  return product;
}

// function r_factorial(num){
//   if (num < 0) {
//     throw Error;
//   }
//   if (num == 1) return 1;
//   return num * r_factorial(num-1)
// }


module.exports = factorial;
