function factorial(n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return "Factorial is not defined for negative numbers";
  } else {
    return n * factorial(n - 1);
  }
}