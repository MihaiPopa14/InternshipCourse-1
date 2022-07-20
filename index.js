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
const string = 'rotor';
function isPalindrome(string){
    return string === string.spit('').reverse().join(''); 
}
if(isPalindrome){
    console.log( string, "is a palindrome");

}else{
    console.log(string, "is not a palindrome"); //to be fixed
}


//Write a function that prints all prime numbers (up to 100000).
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