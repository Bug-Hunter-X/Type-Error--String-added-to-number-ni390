function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if (isNaN(numB)) {
      return a; // Or throw an error, handle differently
    }
    return a + numB; 
  }
  return a + b; 
}

let result1 = add(1, 2); // Correct
let result2 = addSafe(1, '2'); // Safe Handling
let result3 = addSafe(1, 'abc'); //Handles non number string input