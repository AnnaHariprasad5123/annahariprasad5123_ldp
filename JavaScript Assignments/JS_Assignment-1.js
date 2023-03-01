/* 
***************************************************************************************************
Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.
***************************************************************************************************
*/

function sum(...values){ // Taking the multiple arguements into single variable called "values".

    let s = 0; // Taking variable "s" for adding the numbers
    
    for(const i of values){ // Iterating the each value and take it into variable "i"
        s+=i; // Using compound assignment to add the values and store the result into variable "s"
    }
    return [s,values.length]; // Returing array with values that contain addition of values and number of values.
}

function avg(sum){  
    let a = sum; // Storing the function into a varaible so it can be invoked & returns the result
    return a[0]/a[1]; // Calculating the average by taking each value with index of it from the "sum" function.
}

//Passing "sum" function with values as a parameter to "avg" function to find the average of the values.
console.log(`The average of numbers : ${avg(sum(1,2,3,4))}`);  // Printing the average of the numbers-1,2,3,4.


/* 
***************************************************************************************************
Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that 
represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns 
‘RW’. Write this function.
***************************************************************************************************
*/      

// Creating Arrow function "f1" with two parameters and returns concatenation from first letter of each parameter.

const f1 = (name_1,name_2) => name_1[0]+name_2[0];

//Printing the result by invoking the function "f1" by passing the two values.

console.log(`Result : ${f1("Roger","Waters")}`);
