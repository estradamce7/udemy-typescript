// Code goes here!

// Rest parameters - allows us to enter an unlimited amount of parameters. Done by 3 dots and variable name ie (...numbers)
let add = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => {
		return curResult + curValue;
	}, 0);
}

let addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// // Rest with Tuple type - allows us to enter up to parameters.
// add = (...numbers: [number, number, number]) => {
// 	return numbers.reduce((curResult, curValue) => {
// 		return curResult + curValue;
// 	}, 0);
// }

// addedNumbers = add(5, 10, 2, 3.7);

let hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2, ...remainingHobbies] = hobbies; // destructuring the remaining array can be done with the spread operator and will be stored in remainingHobbies as a new array

const person = {
	firstName: 'M',
	age: 30
};
const { firstName: userName, age } = person; // we can make an alias rename a property from a destructred obj
console.log(userName, age, person);
