// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types: parameters

// Primitives

let age: number;
age = 13;

let userName: string;
userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["sports", "cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "max",
  age: 21,
};

// person = {
//   isEmployee: "no",
//   age: 32,
// };
let people: Person[];

// Type inference

let course: string | number = "react course";
course = 22;

// Functions & types

function add(a: number, b: number): number {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
