/*No Users Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */


let userNames:string[]=['admin','Rida','Samia','Zavi','Arhama','Arshi'];

function greetUsers(usernames: string[]) : void {
     
    if(usernames.length === 0){
        console.log('We need to find some users!');
        return;
    }


for(let i in usernames){
    // if(userNames[i].toLowerCase()==='admin')
    if(usernames.indexOf("admin")){
console.log("Hello admin, would you like to see a status report!")
    }else{
        console.log( `Hello  ${usernames[i]}, thank you for logging in again`)
    }
}
}
console.log('For Non Empty Users :\n');
greetUsers(userNames);

userNames=[];
console.log('For Empty Users :\n');
greetUsers(userNames)