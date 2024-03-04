"use strict";
/*T-Shirt Write a function called make_shirt() that accepts a size and the text
of a message that should be printed on the shirt. The function should print a sentence
summarizing the size of the shirt and the message printed on it. all the function.

 */
let make_shirt = (size, message) => {
    console.log(`Size: ${size}, Message: ${message}`);
    return;
};
let size = "Medium";
let message = "Learn Typescript";
make_shirt("Small", "Pakistan Zindabad");
make_shirt(size, message);
