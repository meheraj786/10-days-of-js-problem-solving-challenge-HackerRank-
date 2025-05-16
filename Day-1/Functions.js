/*
 * Create the function factorial here
 */
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else if (n < 0) {
//     return "Factorial is not defined for negative numbers";
//   } else {
//     return n * factorial(n - 1);
//   }
// }
function factorial(n) {
  let element= 1;
  for (let i = n; i > 0; i--) {
    element *= i; 
  }
  return element;
}

factorial(4)