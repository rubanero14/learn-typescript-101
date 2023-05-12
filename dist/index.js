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
var varAny = 10;
var varUnknown = 10;
var stringOne = varAny;
var stringTwo = varUnknown; // AS keyword works as type assertion to convert unknown type to string
var pageNumberOne = "1";
var numericPageNumberOne = pageNumberOne; // since we cant assert type number from string, it needs to convert to unknown type and then to number
// Classes in Typescript
var User = /** @class */ (function () {
    // Constructor declaration
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Function declaration
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var newUser = new User("El", "Discreto", 37);
console.log("User Class Fullname: ", newUser.getFullName());
console.log("User Class Age: ", newUser.getAge());
// Output
// output.textContent = user2.greet();
// Element type | Working with DOM
var title = document.querySelector("title");
title.textContent = "Youtube Video with Timestamp Generator";
var output = document.querySelector(".ts-output");
var ytLink = document.querySelector(".ytLink");
var ytUrl = document.querySelector(".ytUrl");
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
var submitBtn = document.querySelector(".submit");
var ytVid = document.querySelector(".ytVid"); // Element type can be declared using type assertion as well
// To Sec
var toSec = null;
// Adding event listeners
ytUrl.addEventListener("change", function (event) {
    // reading event target value
    var Event = event.target; // Here we type assert event.target as HTML input type and the we access its value below for cleaner code
    console.log("Value of URL: ", Event.value);
});
// Youtube URL with TimeStamp Generator Algorithm
var YoutubeURLwithTimeStampGenerator = function (url, hh, mm, ss) {
    if (url === void 0) { url = ""; }
    if (hh === void 0) { hh = "00"; }
    if (mm === void 0) { mm = "00"; }
    if (ss === void 0) { ss = "00"; }
    var formattedUrl = url.replace("www.youtube.com/watch?v=", "youtu.be/");
    toSec = +hh * 3600 + +mm * 60 + +ss;
    console.log(formattedUrl + "&t=" + toSec + "s");
    return formattedUrl + "&t=" + toSec + "s";
};
var url = "";
var hr = "";
var min = "";
var sec = "";
var formattedUrl = "";
ytUrl.addEventListener("change", function (e) {
    url = e.target.value;
});
hour.addEventListener("change", function (e) {
    hr = e.target.value;
});
minute.addEventListener("change", function (e) {
    min = e.target.value;
});
second.addEventListener("change", function (e) {
    sec = e.target.value;
});
var submit = function () {
    formattedUrl = YoutubeURLwithTimeStampGenerator(url, hr, min, sec);
    ytLink.setAttribute("href", formattedUrl);
    ytLink.setAttribute("target", "_blank");
    ytLink.textContent = "Open Lesson in another tab";
    // Source https://sites.edb.utexas.edu/wordpress/blog/embedding-a-youtube-video-with-start-and-stop-time/
    var vidSrc = formattedUrl
        .split("&")[0]
        .replace("youtu.be", "www.youtube-nocookie.com/embed") +
        "?start=" +
        toSec +
        ";rel=0&amp;showinfo=0";
    console.log(vidSrc);
    ytVid.setAttribute("src", vidSrc);
};
