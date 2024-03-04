"use strict";
/*
More Guests You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


*/
let guestList = ['Rida', 'Samia', 'Arhma', 'Bilal', 'Azam'];
console.log(guestList);
//Add one new guest to the beginning of your array.
console.log("We have invited three more guest on dinner..");
guestList.unshift("Huda");
//Add one new guest to the middle of your array.
guestList.splice(3, 0, "Fatima");
//Add one new guest to the end of your array.
guestList.push("Meer Zaviyar");
//Print all the guest
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} you are invited to dinner !!`);
}
