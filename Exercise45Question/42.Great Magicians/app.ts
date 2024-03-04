/*Great Magicians Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name. Call show_magicians()
 to see that the list has actually been modified.
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


// call function
console.log("\n Great Magicain:")
show_magicians(greatMagicianName);

