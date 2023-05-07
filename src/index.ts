// Element type
const title: HTMLTitleElement = document.querySelector("title");
title.textContent = "Learn Typescript";

const output: any = document.querySelector(".ts-output");

// Data Type
let message: string = "hello";
message = "world";

// Function Type
const myNameIs = (name: string): string => `Your name is ${name}!`;

// Object Type
// Defining Custom Type for Object and its contents using Interface
interface User {
  name: string;
  age?: number; // adding ? after data type in interface indicates tells typescript to omit if this data type/parameter is not declared or not exist
  greet?(): string; // functions also can be defined the return value's data type
}
const user: User = {
  name: "Raj",
};

const user2: User = {
  name: "Sri",
  age: 4,
  greet() {
    return `Hi ${this.name}!`;
  },
};

output.textContent = user2.greet();
