// const person: { // : {} tells typescript this is a type object
//   name: string;
//   age: number
// } = {

// const ADMIN = 0;
// const READ_ONLT = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // if you want to start at a cetain number, declare it. ie "ADMIN = 5" to start at 5 and the rest follows. Or, you can set everything to custom identifiers

// it's still better to let TS infer
// const person: {
//   name: string; // object explicit assignment not advised. but since, role is a Tuple and the type inference is not working the way we want
//   age: number;
//   hobbies: string[];
//   role: [number, string]  // Tuple is a special construct that TS understands,
// } = {
const person = {
  name: 'M',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin',' 'user'];

let favorietActivities: string[];
favorietActivities = ['Sports']

for ( const hobby of person.hobbies ) {
  console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR) {
  console.log('is author');
}

// console.log(person);

// Types added by TS*
// Tuple* - fixed-length array
// Enum* - only exists in TS. Gives an enumerated list starting at 0 where you have readable labels
// Any - doesn't tie to a specific type. can be used as a fallback if you aren't sure the type of data that will be used. avoid as much as you can