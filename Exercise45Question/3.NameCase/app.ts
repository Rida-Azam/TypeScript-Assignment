//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase


let personName :string="Rida Azam";


//lowercase

let lowercaseName:string =personName.toLocaleLowerCase();
console.log(lowercaseName)



//uppercase

let uppercaseName:string =personName.toUpperCase();
console.log(uppercaseName)

//Title case

let words: string[] =personName.split(" ");

let titlecaseName: string=""

for(let i =0 ; i< words.length; i++){
    titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};

console.log(titlecaseName)




