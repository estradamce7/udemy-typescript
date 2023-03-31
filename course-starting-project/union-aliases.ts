// Type Alias - used to "create" your own types. Created by using the "type" keyword and any name
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'; // Type alias used here for a Literal type -> only "as-number" or "as-text", no other strings are allowed

// Union types - tells TS that we can accept either types assigned
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  // since TS is highlighting an error when only input1 + input2, we can use this runtime check
  if ( typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number' ) {
    result = +input1 + +input2; // or parseFloat(input1) + parseFloat(input2)
  } else {
    result = input1.toString() + input2.toString();
  }

  // if(resultConversion === 'as-number') {
  //   return +result; // or parseFloat(result)
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine("M", "Lul", 'as-text');

console.log(combinedNames);

// Literal types - types based on core types but have specific versions of that type. ie above resultConversion we only want "as-number" or "as-text", no other strings are allowed
