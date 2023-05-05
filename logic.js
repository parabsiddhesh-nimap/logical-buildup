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

let greet = (name,lastname = '') => {
    console.log(`Welcome !!! ${name.toUpperCase()} ${lastname.toUpperCase()}`)
};
// greet('siddhesh','Parab');
// -----------------------------------------------------------------------------------------
let sqaure = (n) => {
    n > 1 ? console.log(n*n) : console.log('invalid number');
    // console.log(n*n)
    // return n * n;
};
// sqaure(2)
// -----------------------------------------------------------------------------------------
let n = 5;
const person = {
    name: "Siddhesh",
    lastname:"Parab",
    Age:21,
    Location:"Mumbai"
}

// for (let i in person)
//     console.log(person[i]);

// console.log('Hello')

function maxOfTwo(a,b){
    a > b ?  console.log(`${a} is greater`) : console.log(`${b} is greater`)
} 
// maxOfTwo(10,12)

const isLastScape = (width,heigth) => {
    width > heigth ? console.log("isLastScape") : console.log("IsPortrait")
};

// isLastScape(450,800)
// -----------------------------------------------------------------------------------------

//Add Two Array of dufferent lengths
let arr = [1,2,3,3,4, ];
let arr1 = [2,1,3,3,2];

function addArray(arr,arr2){
    let newArr = [];
    if(arr.length === arr2.length){
        for (let i = 0; i < arr.length;i++){
            let addedNum = arr[i] + arr2[i];
            newArr.push(addedNum)
        }
        // console.log(newArr)
    }else if(arr.length !== arr2.length){
        if(arr.length > arr2.length) {
            for (let i = 0; i < arr.length;i++){
                if(arr2[i]){
                    let addedNum = arr[i] + arr2[i];
                    newArr.push(addedNum)
                }else if(arr2[i] === undefined){
                    arr2[i] = 0;
                    addedNum = arr[i] + arr2[i];
                    newArr.push(addedNum)
                }
            }
        }else {
            for (let i = 0; i < arr2.length;i++){
                if(arr[i]){
                    let addedNum = arr[i] + arr2[i];
                    newArr.push(addedNum)
                }else if(arr[i] === undefined){
                    arr[i] = 0;
                    addedNum = arr[i] + arr2[i];
                    newArr.push(addedNum)
                }
            }
        }
    } 
    console.log(newArr)
}
// addArray(arr,arr1)

//Sum of numbers that are divisible by 3 and 5 till the given argument
function sum(n){
    let sum = 0;
    for (let i = 0;i<=n;i++){
        if (i%3 === 0 || i%5===0) sum += i
    }
    console.log(sum)
    return sum;
}
// sum(10)

function grade(arr){
    let avg = 0;
    let count = 0;
    for (let num of arr){
        avg+=num;
        count++
    }
    avg = avg/count; 
    console.log(avg);
    if(avg>1 && avg<59) console.log('F Grade');
    if(avg>=60 && avg<69) console.log('D Grade');
    if(avg>=70 && avg<79) console.log('C Grade');
    if(avg>=80 && avg<89) console.log('B Grade');
    if(avg>=90 && avg<100) console.log('A Grade');
};
// grade([70,70,80,20]);

//Reverse Star Pattern
function showStars(rows){
    for (let i =1;i<=rows;i++){
        let char = "";
        for(let j = 0;j<i;j++) 
            char += "*"
        console.log(char)
    }
};
// showStars(10);


