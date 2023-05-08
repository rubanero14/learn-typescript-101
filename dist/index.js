// Element type
var title = document.querySelector("title");
title.textContent = "Learn Typescript";
var output = document.querySelector(".ts-output");
var ytLink = document.querySelector(".ytLink");
// Data Type
var message = "hello";
message = "world";
// Function Type
var myNameIs = function (name) { return "Your name is ".concat(name, "!"); };
var user = {
    name: "Raj",
};
var user2 = {
    name: "Sri",
    age: 4,
    greet: function () {
        return "Hi ".concat(this.name, "!");
    },
};
// Interface naming convention or best practice
// Post or Pre-fixing using Interface name, eg: UserInterface or IUser
// Union Operator in Typescript
var userName = "el_loco"; // a variable with single type
var pageNumber = "1"; // a variable with type string or number, defined using Pipe/Union operator as OR
// Use cases including declaring variables for error handling
var errorMessage = null; // if string not exist, this variable by default can be assigned to null
var typescriptTag = null;
var popularTag = ["code", "coffee", "love"]; // Aliases also can be appended with type arrays similar to string[] type
var user3 = null; // Example of another real use cases for undefined data
// It is advisable to limit to max 2 data types, as best practice
// Type Void
var sayHello = function (name) { return console.log("Hello ".concat(name, "!")); }; // When a fn doesnt return anything, it is type void by default
// type void by default is similar to type undefined and null
// Type Any
var hobbies = ["coding", "learning", 123, undefined];
hobbies = null; // using any, it is type agnostic, it also could lead to bug such as below
// console.log(hobbies.listOut()); // since its type any, TS ignores the error in the code where the function doesnt exist but still called
// It is best practice in TS to use any less or never use at all since it can lead to bugs
// Type Never
var neverExecuteFn = function () {
    throw "Never";
}; // a function that never executes
// Type Unknown
var anyVar = 123;
var unknownVar = 123;
unknownVar = "null"; // type unknown is similar to type any, but bug free, example as below
// console.log(unknownVar.doSomething()); // TS throws error to highlight the the function dont exist which type any fails to do
var YoutubeURLwithTimeStampGenerator = function (url, timeStamp) {
    var minToSec = +timeStamp.split(":")[0] * 60 + +timeStamp.split(":")[1];
    return url + "&t=" + minToSec;
};
// Output
output.textContent = user2.greet();
// YT Link Output
ytLink.setAttribute("href", YoutubeURLwithTimeStampGenerator("https://youtu.be/gp5H0Vw39yw", "47:36"));
