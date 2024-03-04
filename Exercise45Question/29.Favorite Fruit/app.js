"use strict";
/*Favorite Fruit Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of
 fruit is in your array. If the fruit is in your array,
 the if block should print a statement, such as You really like bananas! */
let favorite_fruits = ["Apple", "Banana", "Mango"];
if (favorite_fruits.includes("Apple")) {
    console.log("I Like Apple!");
}
if (favorite_fruits.includes("Banana")) {
    console.log("I Also Like Bananas !");
}
if (favorite_fruits.includes("Mango")) {
    console.log("Mango is very tasty!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("Orange is delicious!");
}
if (favorite_fruits.includes("Pear")) {
    console.log("I Like Pear!");
}
