// Code goes here!
// const user = "Max";
// let age = 30;
// age = 29;

// var result;
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }
// console.log(result);

// if (age > 20) {
//   // var isOld = true;
//   let isOld = true;
// }
// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 4));

// const printOutput: (a: string | number) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
hobbies.push(...activeHobbies);

const person = {
  firstName: "Max",
  age: 30,
};

// const copiedPerson = person;
const copiedPerson = { ...person };
copiedPerson.age = 29;
console.log(copiedPerson);
console.log(person);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addNumbers = add(1, 2, 3, 4, 5, 6, 7);
console.log(addNumbers);

const [one, ...two] = hobbies;
console.log(one, two);

const { firstName: userName, age } = person;
console.log(userName, age);
