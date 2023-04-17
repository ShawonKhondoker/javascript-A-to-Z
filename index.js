
//...............ভেরিয়েবল ডিক্লারেশন এবং আসাইনমেন্ট:

var a = 5;

var name = 'John';
let age = 25;
const PI = 3.14;


//..........কন্ডিশনাল স্টেটমেন্ট:

if (a > 10) {
    console.log("a is greater than 10");
  } else {
    console.log("a is less than or equal to 10");
  }
//....................

  if (age >= 18) {
    console.log('You are an adult');
 } else {
    console.log('You are not an adult yet');
 }
 
  
  //.................লুপ:
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  
  //....................

  for (let i = 0; i < 10; i++) {
    console.log(i);
 }
 
 while (i < 10) {
    console.log(i);
    i++;
 }
 
  //...................ফাংশন ডিফিনিশন:

function addNumbers(x, y) {
  return x + y;
}

//.............
function add(a, b) {
    return a + b;
 }
 
 const multiply = (a, b) => {
    return a * b;
 };
 

//............জাভাস্ক্রিপ্ট এর বিভিন্ন প্রপার্টি এবং মেথড ব্যবহার:

var myString = "Hello World!";
console.log(myString.length); // স্ট্রিং এর লেংথ জানতে
console.log(myString.toUpperCase()); 
// স্ট্রিং কে ক্যাপিটাল লেটার দিয়ে লিখতে

// //.....অজাক্স (AJAX) রিকুয়েস্ট করা এবং রেসপন্স হ্যান্ডল করা:
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(this.responseText);
//   }
// };
// xhttp.open("GET", "https://api.example.com/data", true);
// xhttp.send();

//..............অবজেক্ট ডিফিনিশন:

const person = {
    name: 'John',
    age: 25,
    address: {
       city: 'New York',
       state: 'NY'
    },
    hobbies: ['reading', 'painting', 'swimming']
 };
 
 console.log(person);



 //......অবজেক্ট (Object) ডিফাইন করা এবং প্রপার্টি (Property) এবং মেথড (Method) ব্যবহার করা:
let person1 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person1.fullName());

//.........এরে (Array) ডিফাইন করা এবং এর উপযোগী মেথড ব্যবহার করা:

let fruits = ["apple", "banana", "orange"];

console.log(fruits.length);

fruits.push("grape");

console.log(fruits);