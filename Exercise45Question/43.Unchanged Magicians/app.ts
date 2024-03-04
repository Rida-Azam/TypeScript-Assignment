/*Unchanged Magicians Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of
  magicians’ names. Because the original array will be unchanged,
 return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array 
of the original names and one array with the Great added to each magician’s name.

 */



 let magician: string[] = ['Penn & Teller', 'Derren Brown', 'Dai Vernon',
 'Jean-Eugène', 'Robert-Houdin', 'Lance Burton', 'Black Herman', 'David Blaine', 'Ricky Jay'];

function show_magicians(magician: string[]): void {
 for (let i of magician) {
     console.log(i);
 }
}


function make_great(i: string[]): string[] {
 let greatMagician: string[] = i.map(magician => `The Great ${magician} `)
 return greatMagician;

}

const greatMagicianName: string[] = make_great(magician);


console.log("Original Magicain:");
show_magicians(magician);

console.log("\n Great Magicain:")
show_magicians(greatMagicianName);

