/*
1. Code to Reverse String but Index of word remains at same position 
 */
let str = "This is JavaScript Code";

function reverseStringButOriginalIndex(str){
    let arr = [];
    let newStr = "";

    let char = str.split(' ');
    for (let i = 0;i < char.length; i++){
        newStr = newStr + " ";
        arr.push(char[i])
        for (let j = char[i].length;j >= 0;j--){
            if(char[i][j] === undefined){
                continue;
            } else {
                newStr += arr[i][j]
            }
        }
    }
    return newStr;
}
// console.log(reverseStringButOriginalIndex(str));

/* 
2. Code to Reverse a Integer Without changing it to String
*/
let num = 123456;

function reverseNumber(n){
    let reversed = 0;

    while(n>0){
        reversed = (reversed * 10) + (n % 10);
        n = Math.floor(n/10);
    }
    return reversed;
};
// console.log(reverseNumber(num));

/* 
3. Find the Second Highest Element of an Array Without Sorting and without using prebuild Func
*/
let arr = [12, 35, 1, 10, 34, 1, 35];
function findSecondHighest(arr){
    let first=0;
    let second = 0;
    
    for (let i = 0;i < arr.length;i++){
        if(arr[i] > first){
            first = arr[i];
            // console.log("First : " , first)
        }
    }
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[j] > second && arr[j] < first){
            second = arr[j]
        }
    }
    return second;
}
// console.log(findSecondHighest(arr));

/*
4. Swap Values without using any variable a=10, b=12
*/

let a = 10, b = 12;
function swapNumber(a,b){
    // [a,b] = [b,a];    //method 1
    a = a + b;           //method 2
    b = a - b;
    a = a - b; 
    return `a value is : ${a} ,b value is : ${b}`
}
// console.log(swapNumber(a,b))

/* 
5. WAP to find the given string is Palindrome or not
*/
let palindromeString = "sidd";
function checkPalindrome(str){
    let newchkPalindrome = "";
    for (let i = str.length - 1; i >= 0; i--){
        newchkPalindrome += str[i];
    }
    console.log(str,newchkPalindrome)
    if(newchkPalindrome === str) return true
    else return false
};
// console.log(checkPalindrome(palindromeString));

/* 
6. Find prime numbers from 1 ....n 
*/

function primeNumber(){
    var value = 4;
    var value = 5;
    for (let i = 2; i <= 100;i++){
        let count = 0;
        for (let j = 1;j <= i;j++){
            if (i%j === 0) {
                count += 1;   
            }
        }
        if(count == 2) {
            console.log(i)
            count = 0; 
        }
    }
}
// primeNumber()

/*
7. WAP for getting a square root of a given number
*/

function sqrt(n){
    return n**0.5
};
// console.log(sqrt(81));
