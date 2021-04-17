//1) Write a js program to convert lowercase string to uppercase.

const low_str = 'hello js';
const up_str = low_str.toLocaleUpperCase();
console.log('After conversion : ', up_str);

//2. Write a js program to convert uppercase string to lowercase.

var upp_str = 'I AM ZEESHAN';
var lowr_str = upp_str.toLocaleLowerCase();
console.log ('After conversion:', lowr_str);


//3. Write a js program to toggle case of each character of a string

function toggleCase(str) {
    return str.toUpperCase().split(' ').map(function(word) {
      return (word.charAt(0).toLowerCase() + word.slice(1));
    }).join(' ');
  }
console.log(toggleCase("this sentence is converted into lower toggle case."));

//4. Write a js program to find total number of alphabets, digits or special character in a string.

const str = "This, is a-sentence;.Is this a sentence?";
const countSpecial = str => {
   const punct = "!,\;\.-?";
   let count = 0;
   for(let i = 0; i < str.length; i++){
      if(!punct.includes(str[i])){
         continue;
      };
      count++;
   };
   return count;
};
console.log(countSpecial(str));

//5.Write a js program to count total number of vowels and consonants in a string.

function countVowel(str) { 

    const count = str.match(/[aeiou]/gi).length;
    return count;
}

const string = 'this is a string';

const result = countVowel(string);

console.log(result);

//6. Write a js program to count total number of words in a string.

function WordCount(str) { 
    return str.split(" ").length;
  }
  
  console.log(WordCount("hello world"));

  //7. Write a JavaScript program to list the properties of a JavaScript object
  var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 }; 
    
    for (const i in student) {
        console.log(`${i} : ${student[i]}`);
    }

    
    // 8. Write a JavaScript program to delete the rollno property from the 
// following object. Also print the object before or after deleting the 
// property. 
// Sample object: 
// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };
console.log('deleting rollno');
console.log(delete student.rollno);

for (const i in student) {
    console.log(`${i} : ${student[i]}`);
}

// 9. Write a JavaScript program to get the length of a JavaScript object. Sample object : 
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 };
  console.log(Object.keys(student).length);
  
  // 10. Write a JavaScript program to display the reading status (i.e. 
// display book name, author name and reading status) of the 
// following books. 
var library = [ 
  { 
  author: 'Ulysses', 
  title: 'James Joyce', 
  readingStatus: true  }, 
  { 
  author: '	Pride and Prejudices', 
  title: 'Jane Austen', 
  readingStatus: false 
  }, 
  { 
  author: '	For whom the Bell Tolls', 
  title: '	Ernest Hemingway', 
  readingStatus: true 
  }]; 
 
  for (let index = 0; index < library.length; index++) {
      for (const value in library[index]) {
          x= library[index]
         console.log(`${value} : ${x[value]}`);
      }
      console.log('\n');
  }

  //11.Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   
// Volume of a cylinder : V = πr2h

function Cylinder(cylndr_height, cylndr_diameter) {
  this.cylndr_height = cylndr_height;
  this.cylndr_diameter = cylndr_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cylndr_diameter / 2;
  return this.cylndr_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
console.log('The volume is  =', cyl.Volume().toFixed(4));

// 12. Write a js program to print all odd number between 1 to 100. 

for (let index = 0; index <= 100; index++) {
  if (index % 2 !== 0 ) {
      console.log(index);
  }
}

//Write a js program to find sum of all natural numbers between 1 to n.

let n= 50; let sum=0;
for (let index = 1; index <= n; index++) {
    sum += index;
}
console.log('sum of ',n,' terms is: ',sum);

// 14. Write a js program to find sum of all even numbers between 1 to n. 
n= 100; sum=0;
for (let index = 1; index <= n; index++) {
    if (index %2 === 0) {
        sum += index;
    } else{
        continue;
    }
}
console.log('sum of: ',n,'even number is: ',sum);

// 15. Write a js program to find sum of all odd numbers between 1 to n.
n= 100; sum=0;
for (let index = 1; index <= n; index++) {
    if (index %2 !== 0) {
        sum += index;
    } else{
        continue;
    }
}
console.log('sum of: ',n,'summ of odd number is: ',sum);

// 16. Write a js program to print multiplication table of any number.
for (let index = 1; index < 11; index++) {
  console.log(`${index} x ${7} = ${index*7}`);

}

// 17. Write a js program to count number of digits in a number. 
let num= 01234567;
console.log(num.toString().length);

// where r is the radius and h is the height of the cylinder.
class Cyln {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  // Getter method - call without ()
  get volume() {
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}
const c1 = new Cyln(5,10);
console.log(c1.volume);


// 19. Write a js program to find maximum between two numbers. 
let a=15, b= 30
if (a>b) {
    console.log(a,'is grater than',b);
} else {
    console.log(b,'is grater than',a);
}

// 20. Write a js program to find maximum between three numbers. 
let  c=40
if (a>b && a>c) {
  console.log(a,'is grater than',b,c);
}if (b>a && b>c) {
  console.log(b,'is grater than',a,c);
} else {
  console.log(c,'is grater than',a,b);
}

// 21. Write a js program to check whether a number is negative, positive or zero. 
num=174;
if (num>0) {
    console.log('+ve');
}if (num<0) {
    console.log('-ve');
}if (num === 0) {
    console.log('zero');
}

// 22. Write a js program to check whether a number is divisible by 5 and 11 or not. 
num =70;
if (num %5 ===0 || num %11===0) {
    console.log(num,'divisible by 5 and 11');
} else {
    console.log('not divisible by 5 and 11');
}

// 23. Write a js program to check whether a number is even or odd. 

if (num % 2 ===0) {
  console.log(num, 'Even');
} else {
  console.log(num,'Odd');
}

// 24. Write a js program to check whether a year is leap year or not. 
let year = 2021;
if (year % 100 === 0 ||year % 400 === 0 ||year % 4 === 0 ) {
    console.log(year,'is a leap year');
} 
else {
    console.log(year,'not a leap year');
}

// 25. Write a js program to check whether a character is alphabet or not. 
let ch='z';
if (ch.length === 1 && ch.match(/[a-z]/i)) {
    console.log(ch,'is an alphabet');
} else {
    console.log(ch,'is not an alphabet');
}

// 26. Write a js program to input any alphabet and check whether it is vowel or consonant. 
if (ch.length === 1 && ch.match(/[a,e,i,o,u]/i)) {
  console.log(ch,'is an vowel');
} else {
  console.log(ch,'is  a consonant');
}

// 27. Write a js program to input any character and check whether it is alphabet, digit or special 

if (ch.length === 1 && ch.match(/[a-z]/i)) {
    console.log(ch,'is an alphabet');
} else if (ch.length === 1 && ch.match(/[$,&,#,@]/i)) {
    console.log(ch,'is an alphabet');
} else if (typeof(ch) === typeof(1)) {
    console.log(ch,'is a digit');
}

// Functions

// 28. Write a js program to find cube of any number using function. 

function cube(num) {
  num = num **3;
  return num;
}
console.log('cube is: ',cube(8));

// 29. Write a js program to find diameter, circumference and area of circle using functions. 
function cir(radious) {
  let val=[];
  const cir = 2* Math.PI * radious;
  const d = 2* radious;
  const area = a* Math.PI* (radious)**2
  val = [cir,d,area]
  return val
}
let reslt = cir(10);
console.log('circumference', reslt[0]);
console.log('diameter', reslt[1]);
console.log('Area', reslt[2]);

// 30. Write a js program to find maximum and minimum between two numbers using functions.

function maxmin(a,b) {
  if (a>b) {
      console.log(a,'is grater than',b);
  } else {
      console.log(b,'is grater than',a);
  }
}

console.log(maxmin(10,16));

// 31. Write a js program to check whether a number is even or odd using functions. 

function eo(num) {
  if (num % 2 ===0) {
      console.log(num, 'Even');
  } else {
      console.log(num,'Odd');
  }
  return 0;
}

console.log(eo(7));


// 38. Write a js program to print day of week name using switch case. 
let sw = 'zain';
switch (sw) {
  case 'zain':
      console.log('Zain');
      break;

  default:
      console.log('try again');
      break;
}

// 39. Write a js program print total number of days in a month using switch case. 
sw='fabrary';
switch (sw) {
  case 'january':
      for(let i=1; i<=31; i++){
          console.log('Day',i);
      }
      break;

  case 'fabrary':
      for(let i=1; i<=28; i++){
          console.log('Day',i);
      }
      break;

  default:
      console.log('try again');
      break;
}



// 40. Write a js program to check whether an alphabet is vowel or consonant using switch case
ch = 'a';

switch (ch) {
  case 'a':
      console.log('vowel');
      break;

  case 'e':
      console.log('vowel');
      break;

  case 'i':
      console.log('vowel');
      break;

  case 'o':
      console.log('vowel');
      break;

  case 'u':
      console.log('vowel');
      break;

  default:
      console.log('conconent');
      break;
};


// 41. Write a js program to find maximum between two numbers using switch case. 
a = 21, b = 20
switch (a, b) {
  case a > b:
      console.log(a, 'is greater than', b);
      break;

  default:
      console.log(b, 'is greater than', a);
      break;
}


// // 42. Write a js program to check whether a number is even or odd using switch case. 

 num = 19;
res= num % 2 === 0;
switch (res) {
  case (true):
      console.log(num, 'is even');
      break;

  default:
      console.log(num, 'is odd');
      break;
}

// 43. Write a js program to check whether a number is positive, negative or zero using switch case. 

function swi(num) {
  let sw_result = 7;
  if (num > 0) {
      sw_result = 1;
  } if (num < 0) {
      sw_result = -1;
  } if (num === 0) {
      sw_result = 0;
  }
  return sw_result;
}

ch = swi(9);
console.log(ch);

switch (ch) {
  case -1:
      console.log('-ve');
      break;

  case 1:
      console.log('+ve');
      break;

  case 0:
      console.log('zero');
      break;

  default:
      console.log('None');
      break;
}



// 44. Write a js program to find roots of a quadratic equation using switch case. 


const md = function name(params) {
  let a = 4, b = 43, c = 9;
  let decider = 7;
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
      decider = 1;
  } else if (discriminant == 0) {
      decider = 0;
  } else {
      decider = -1;
  }
  const arr = [decider, discriminant];
  return arr;
}

console.log(md());
sw = md();
switch (sw[0]) {
  case 1:
      root1 = (-b + Math.sqrt(sw[1])) / (2 * a);
      root2 = (-b - Math.sqrt(sw[1])) / (2 * a);
      console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
      break;
  case 0:
      root1 = root2 = -b / (2 * a);
      console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
      break;
  case -1:
      let realPart = (-b / (2 * a)).toFixed(2);
      let imagPart = (Math.sqrt(-sw[1]) / (2 * a)).toFixed(2);
      console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
      );
      break;

  default:
      console.log('Error');
      break;
}



// 45. Write a js program to create Simple Calculator using switch case

a = 18, b = 8;
let operator = '*';

switch (operator) {
  case '+':
      console.log(a + b);
      break;
  case '-':
      console.log(a - b);
      break;
  case '*':
      console.log(a * b);
      break;
  case '/':
      console.log(a / b);
      break;

  default:
      break;
}

// 46. Write a js program to count total number of negative elements in an array. 
let nc=0,pc=0;
arr = [1,2,3,6,6,3,5,-1,-2];
let arr2=[-3,-4,-5]
for (let index = 0; index < arr.length; index++) {
  if (arr[index]<0){nc+=1}
  else{
      pc +=1
  }
  
}
console.log('-ve elements are: ',nc);
console.log('+ve elements are: ',pc);


// 47. Write a js program to copy all elements from an array to another array. 

Array.prototype.push.apply(arr2, arr);

console.log(arr2);

// 48. Write a js program to insert an element in an array. 

arr2.push(2,34);
console.log(arr2);

// 49. Write a js program to delete an element from an array at specified position. 
console.log(arr2);
arr2.splice(3,1)
console.log(arr2);

// 50. Write a js program to count frequency of each element in an array. 
// const countOcc = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
// console.log(countOcc(arr2));
let unique=[],duplicated=[];
arr2=[1,2,3,4,5,5,6,6,6,6,7,7]
for (let index = 0; index < arr2.length; index++) {
  const e = arr2[index];
  if (unique.includes(e) && e === arr2[(index-1)]) { 
      let ind = unique.indexOf(e);
      unique.splice(ind,1); 
      duplicated.push(arr2[(index-1)]);
      duplicated.push(e);
  }
  else{ unique.push(e)}
}

console.log(duplicated);

// 51. Write a js program to print all unique elements in the array. 
console.log(unique);

// 52. Write a js program to count total number of duplicate elements in an array. 
const countOcc = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
console.log(countOcc(arr2));

// 53. Write a js program to delete all duplicate elements from an array.
for (let index = 0; index < arr2.length; index++) {
  const el = arr2[index];
  const pel = arr2[index+1];
  let con=0;
  for (let i = index; i < arr2.lastIndexOf(el); i++) {
      if (el === pel) {
          con+=1;
      }
      
  } arr2.splice(index,con)
  
}
console.log(arr2);


// 54. Write a js program to merge two array to third array. 
let aa=[1,2,3,4,5],bb=[6,7,8,9,10],cc=[];
let fff = cc.concat(aa,bb);
console.log(fff);

// or

Array.prototype.push.apply(aa,bb);
Array.prototype.push.apply(cc,aa);
console.log(cc);