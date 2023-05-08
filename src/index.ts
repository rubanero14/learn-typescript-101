// Element type
const title: HTMLTitleElement = document.querySelector("title");
title.textContent = "Learn Typescript";

const output: HTMLDivElement = document.querySelector(".ts-output");

// Data Type
let message: string = "hello";
message = "world";

// Function Type
const myNameIs = (name: string): string => `Your name is ${name}!`;

// Object Type
// Defining Custom Type for Object and its contents using Interface
interface IUser {
  name: string;
  age?: number; // adding ? after data type in interface indicates tells typescript to omit if this data type/parameter is not declared or not exist
  greet?(): string; // functions also can be defined the return value's data type
}
const user: IUser = {
  name: "Raj",
};

const user2: IUser = {
  name: "Sri",
  age: 4,
  greet() {
    return `Hi ${this.name}!`;
  },
};

// Interface naming convention or best practice
// Post or Pre-fixing using Interface name, eg: UserInterface or IUser

// Union Operator in Typescript
let userName: string = "el_loco"; // a variable with single type
let pageNumber: string | number = "1"; // a variable with type string or number, defined using Pipe/Union operator as OR
// Use cases including declaring variables for error handling
let errorMessage: string | null = null; // if string not exist, this variable by default can be assigned to null

// Type Aliases using 'type' keyword, similar to declare variable, declaring type aliases
// Types and Interfaces are declared using capital letter
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}

let typescriptTag: MaybePopularTag = null;

let popularTag: PopularTag[] = ["code", "coffee", "love"]; // Aliases also can be appended with type arrays similar to string[] type

let user3: UserInterface | null = null; // Example of another real use cases for undefined data
// It is advisable to limit to max 2 data types, as best practice

// Type Void
const sayHello = (name: string): void => console.log(`Hello ${name}!`); // When a fn doesnt return anything, it is type void by default
// type void by default is similar to type undefined and null

// Type Any
let hobbies: any = ["coding", "learning", 123, undefined];
hobbies = null; // using any, it is type agnostic, it also could lead to bug such as below
// console.log(hobbies.listOut()); // since its type any, TS ignores the error in the code where the function doesnt exist but still called
// It is best practice in TS to use any less or never use at all since it can lead to bugs

// Type Never
const neverExecuteFn = (): never => {
  throw "Never";
}; // a function that never executes

// Type Unknown
let anyVar: any = 123;
let unknownVar: unknown = 123;
unknownVar = "null"; // type unknown is similar to type any, but bug free, example as below
// console.log(unknownVar.doSomething()); // TS throws error to highlight the the function dont exist which type any fails to do

// Output
output.textContent = user2.greet();
