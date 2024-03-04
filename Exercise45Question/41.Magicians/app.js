"use strict";
/**Magicians Make a array of magician’s names.
 *  Pass the array to a function called show_magicians(),
 * which prints the name of each magician in the array.

 */
let magician = ['Penn & Teller', 'Derren Brown', 'Dai Vernon',
    'Jean-Eugène', 'Robert-Houdin', 'Lance Burton', 'Black Herman', 'David Blaine', 'Ricky Jay'];
function show_magicians(magician) {
    for (let i of magician) {
        console.log(i);
    }
}
show_magicians(magician);
