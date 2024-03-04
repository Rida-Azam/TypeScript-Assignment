"use strict";
/*Animals Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
                  • Add a line at the end of your program stating what these animals have in common.
 You could print a sentence such as Any of these animals would make a great pet! */
let animals = ["cow", "cat", "goat"];
console.log("List of Animals:");
for (let animal of animals) {
    console.log(animal);
}
console.log("\n Statement About Each Animal:");
for (let i of animals) {
    if (i === "cow") {
        console.log(`A ${i} is my favourite animal.`);
    }
    else if (i === "cat") {
        console.log(`A ${i} is a cute pet.`);
    }
    else if (i === "goat") {
        console.log(`A ${i} is pet they give milk.`);
    }
}
console.log("\n What are the common Characterstic in all?");
console.log("Any of these would be great pet!");
