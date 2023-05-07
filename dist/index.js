// Element type
var title = document.querySelector("title");
title.textContent = "Learn Typescript";
var output = document.querySelector(".ts-output");
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
output.textContent = user2.greet();
