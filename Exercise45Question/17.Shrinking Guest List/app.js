"use strict";
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
let guestList = ['Rida', 'Samia', 'Arhma', 'Bilal', 'Azam', 'Arshi', 'Hina'];
console.log("There is only space for 2 persons , table is not available \n");
//remove guest
let guest1 = guestList.pop();
console.log(`Sorry  ${guest1} you can’t invite them to dinner.`);
let guest2 = guestList.pop();
console.log(`Sorry  ${guest2} you can’t invite them to dinner.`);
let guest3 = guestList.pop();
console.log(`Sorry  ${guest3} you can’t invite them to dinner.`);
let guest4 = guestList.pop();
console.log(`Sorry  ${guest4} you can’t invite them to dinner.`);
let guest5 = guestList.pop();
console.log(`Sorry  ${guest5} you can’t invite them to dinner.\n`);
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear , ${guestList[i]} you are still invited to the Dinner! `);
}
guestList.pop();
guestList.pop();
console.log(guestList);
