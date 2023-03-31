// Unknown type - we have to first check the type that is currently stored before it can be assigned to another variable
// Unknown is a better choice than "any" because it requires checking
let userInput: unknown; // we can store any values like any
let userName: string;

userInput = 5;
userInput = 'M';

// userName = userInput; // TS throws a warning because it isn't checked
if(typeof userInput === 'string') { // type check for unknown type.
  userName = userInput;
}

// Never type - never produces a return value (console logging this will not show anything in console)
// TS assumes its type is void, but we can explicitly declare it is "never" to make it clear
function generateError(message: string, code: number): never {
  throw { message, errorCode: code }
  // while (true) {} // can be used for this scenario
}

const result = generateError('An error occurred', 500);
// console.log(result) // this doesn't show anything in console because nothing is returned and never returns