"use strict";
/*More Conditional Tests You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using and and or operators

• Test whether an item is in a array

• Test whether an item is not in a array */
// equality & inequality
let stuName = "Rida";
console.log(stuName == "Rida");
console.log(stuName !== "rida");
//numeric
let newNumber = 17;
console.log(newNumber == 17);
console.log(newNumber !== 17);
console.log(newNumber > 17);
console.log(newNumber < 17);
console.log(newNumber <= 17);
console.log(newNumber >= 17);
//&& or || operator
let num1 = 10;
let num2 = 6;
console.log(num1 > 9 && num2 < 6);
console.log(num1 > 9 || num2 < 6);
let myArray = [2, 3, "Rida"];
let myString = "Azam";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
