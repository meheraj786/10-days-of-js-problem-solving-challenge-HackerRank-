function main() {
  // Read input using 'readLine()'
  const PI = Math.PI;
  let r = parseFloat(readLine()); // Convert input to a number
  
  // Print the area of the circle:
  console.log(PI * (r * r));
  
  // Print the perimeter of the circle:
  console.log(2 * (PI * r));
}