/**Dinner Guests: Working with one of the programs from 
 * Exercises 14 through 18, print a message indicating 
 * the number of people you are inviting to dinner.*/

let guestList : string []=["Rida","Samia","Arhama","Arshi","Meer Zaviyar","Hina","Azam"];

console.log(`I am inviting ${guestList.length} person to dinner.\n`);
for(let i=0;i<guestList.length;i++){
    console.log(`${i+1}.${guestList[i]}`);
}