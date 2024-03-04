/*
Seeing the World Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/


let places : string []=["Pakistan","London","America","Canada","Dubai"]
//console.log(places);

//copy of an array

let copyArray=places.slice();
let sortArray =copyArray.sort();

//console.log(sortArray);


//• Show that your array is still in its original order by printing it.

//console.log(places)


//reverse original array

let copy2 = places.slice();
let reverseArray=copy2.reverse();

//console.log(reverseArray)

//print original one

//console.log(places);

//reverse the order of original array
let reverseOriArray2 =places.reverse();
console.log(reverseOriArray2);

let againReverse=reverseOriArray2.reverse();
console.log(againReverse);

//sorting original array


let sortOriginalArray=places.sort();
console.log(sortOriginalArray);


//reverse sort array

let reverseSortArray=sortOriginalArray.reverse();
console.log(reverseSortArray);
