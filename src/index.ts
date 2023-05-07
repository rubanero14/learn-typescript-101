// Element type
const title: HTMLTitleElement = document.querySelector("title");
title.textContent = "Learn Typescript";

const output = document.querySelector(".ts-output");

// Data Type
let message: string = "hello";
message = "world";

// Function Type
const myNameIs = (name: string): string => `Your name is ${name}!`;

output.textContent = myNameIs("Rajaruban");
