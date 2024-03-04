//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var personName = "Rida Azam";
//lowercase
var lowercaseName = personName.toLocaleLowerCase();
console.log(lowercaseName);
//uppercase
var uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
//Title case
var words = personName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
