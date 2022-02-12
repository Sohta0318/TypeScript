// const person: { name: string; age: number } = { name: "Maxiliam", age: 30 };
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maxiliam",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY = "READ_ONLY",
  AUTHOR = 200,
}

const person = {
  name: "Maxiliam",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'test', 'sample']

let favoritesActivities: string[];
favoritesActivities = ["Sports"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
