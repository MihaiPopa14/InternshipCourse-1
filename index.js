// Write a function that returns the largest element from a list.
const array = [4, 6, 7, 1, 3];
console.log(Math.max(...array)); //prints: 7 

//Write a function that reverses a list, preferably in place.
const reversedArray = array.reverse();
console.log('Reversed array: ', reversedArray); //prints [3, 1, 7, 6, 4]
array.reverse(); // Bring the array to the initial state

//Write a function that checks whether an element occurs in a list.
console.log(array.find(element => element > 2));

//Write a function that returns the elements on odd positions in a list.
console.log(array.filter(x => x % 2 == 1));

//Write a function that computes the running total of a list.
//?? TBD

//Write a function that tests whether a string is a palindrome.

function isPalindrome(string){
    
    const len = string.length; //length of the string
    for(let i = 0; i < len/2; i++){ // loop trough half of the word
        if(string[i] !== string[len - 1 - i]){ // Checks if letter at the beginning of the word is the same as the letter at the end of it 
            return "Not a palindrome!"         //  r o t o r
        }else{                                 //  ^       ^
            return "It is a palindrome"        //    ^   ^
        }                                      //      ^
    }
}

const string = 'rotor121';
const value = isPalindrome(string);
console.log(value);



//Write a function that prints all prime numbers (up to 100000). ============ DE REFACUT CU ALGO - Ciurul lui Eratostene==============
// let isPrime = true;
// for(let i = 2; i <= 100000; i++){
//     for(let j = 2; j < i - 1; j++){
//         if(i % j == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(i);
//     }
//     isPrime = true;     
// }                  ================> prints all the numbers!

//Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

console.log(array1.map((elem, index) => [elem, array2[index]]).flat());

//Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6].
const arr1 = [4, 6, 2];
const arr2 = [7, 5, 3];

var result = arr1.sort((a,b) => a - b).concat(arr2.sort((a,b) => a - b));
result.sort((a,b) => a - b );
console.log(result);

//Write a function that takes a number and returns a list of its digits. 2342 should return [2,3,4,2].
const nr = 2315;
const nrArray = Array.from(String(nr), Number);
console.log(nrArray);