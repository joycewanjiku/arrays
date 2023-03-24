
// Arrays
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
let arrayOne=[3,7,34,90,12];
let array= arrayOne.slice(-1);
console.log(array);

// arr2 = [true, "green", "where",12,56]/
let arrayTwo=[true,"green","where",12,56,];
let arry= arrayTwo[arrayTwo.length-1];
console.log(arry)
// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];
let myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.join());


// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];//
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

console.log(arr3.sort());
console.log(arr3.reverse());


// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
            // "orange", "mango", "mango"];
            var arr = ["apple", "mango", "apple","orange", "mango", "mango"]
            const fruits=[]
            arr.forEach(element => {
                if(!fruits.includes(element)){
                    fruits.push(element)
                    console.log()
                }
                
            });
            console.log(fruits)
            
            const four=arr.sort()
            const x=four.reverse()
            let[a, ...b]=four;
            console.log(b)
            
            
// Write a JS script to search for the following word in the array.///
// 4
// If the word is present, console it else console "the search word was not found"/
let arr5 = ["the", "way", "x", 4, 23];
if(arr5.includes("4")){
    console.log(4)
}else{
    console.log("The search word was not found")
}


// Write a JS script to sort the following string
let word = "lufituaeb"
let word2 = word.split("").sort().join()

// Given an arry num of numbers and a target,return the index is found in the array else return null

function binary(num,target){
    let left=0
    let right =num.length -1;
    while(left<= right){
        let middle =math.floor((left+ right)/2)
        if(num[middle] ===target){
            return middle;
        }
t

