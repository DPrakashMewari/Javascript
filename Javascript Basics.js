// 1 . ways to print something in javascript
//console.log("Hello World")
// alert("Hello Prakash")
// console.log("Message was displayed by the function",24+33,'Hello')
// document.write('this is document write')


// 2. Javascript console API
// console.log("Hello world",23,'tcc')
// console.error() to check error
// console.warn() warn message


// 3. Javascript variables
// what are variable = containers to store data values
//var num1 = 20
//var num2 = 221
//console.log("This is addition of two numbers",num1+num2)

// Data type in javascript
// var str1 = "This is text"  // str
// var num1 = 2.4 // float
//objects
var marks = {
    ravi : 33,
    shubham : 31
    }
// console.log(marks)
var a = 1
var b = 2
//console.log(a==b)
//
var n = undefined;
var n1 = null
//console.log(n,n1)
// above all are primitive data types
// reference data types Arrays and objects

var arr = [1,213,23,21]
// console.log(arr)

// Operators
var a = 100;
var b = 10;
//console.log("The value of a + b is ",a+b)
//console.log("The value of a - b is",a-b)
//console.log("The value of a*b is ",a*b)
//console.log("The value of a / b is ",a/b)
var c = b
//console.log(c);

var x = 35;
var y = 56;
//console.log(x==y);
//console.log(x>=y);
//console.log(x<=y);
//console.log(x>y);
//console.log(x<y);

// Logical And
//console.log(true && true)
//console.log(true && false)
//console.log(false && true)
//console.log(false && false)

// Logical or
//console.log(true || true)
//console.log(false || true)
//console.log(false || true)
//console.log(false || false)

// logical not
//console.log(!false)  // False becom true
//console.log(!true) // True become lie

// operator  + , operand : value

// function in javascript
// DRY : Do not repeat yourself
function avg(a,b){
    return (a+b)/2;
}
x  = avg(4,6)
x1 = avg(33,33)
//console.log(x,x1)

// conditionals in javascript
//var age = 31
//if (age > 18){
//    console.log("You are younger")
//}
//else if (age > 23){
//    console.log("You are mature now")
//}
//else{
//    console.log("You are not younger")
//}
//console.log('End of  Ladder')

// loops
var arr = [1,3,1,321,31,2]
//for(var i=0;i < arr.length;i++){
//   if (i==3){
//   continue
//   }
//   console.log(arr[i])
//
//}

let j = 0
//while(j < arr.length){
//    console.log(arr[j]);
//    j++;
//}

//let myarr = ['Prakash','krish','ay','camera']
//console.log(myarr.length);
////myarr.pop();
////myarr.push('pray')
//myarr.shift() // delete from first
//console.log(myarr.unshift("Prakash"))
//console.log(myarr)

// String method in Javascript
let mystring = "Prakash good";
//console.log(mystring.length)
//console.log(mystring.indexOf('good'))

//console.log(mystring.slice(0,3)) # slicing in javascript
//d = mystring.replace('Prakash','vanj');
//console.log(d)

//let mydate= new Date();
//console.log(mydate)
//console.log(mydate.getTime());
//console.log(mydate.getFullYear());
//console.log(mydate.getDay());
//console.log(mydate.getMinutes());

// DOM MAnipulation
// document # TO ACCESS HTML CONTENT
//let elem  = document.getElementById("click")
//console.log(elem)
//let elem1  = document.getElementsByClassName("container")
////elem1[0].style.background='red'
//console.log(elem1)
//// for adding new class in our script
//elem1[0].classList.add('bg-primary')
//elem1[1].classList.add('flash-green')
//elem1[1].classList.remove('flash-green')
//
//console.log(elem.innerHTML)
//console.log(elem.innerText)
//console.log(elem1[0].innerHTML)
//console.log(elem1[0].innerText)
// to search by tag nam
tn = document.getElementsByTagName('div')
//console.log(tn)
// if you want to child in div
createdElement = document.createElement('p');
createdElement.innerText = "This is Prakash";
tn[0].appendChild(createdElement);

// replacing child with
createdElement1 = document.createElement('b');
createdElement1.innerText = "This is Prakash bold";
tn[0].replaceChild(createdElement1,createdElement);

// removeChild(element);  --> removes an element
// document.location --- knowing port no all thing
// document.title -- Knowing the website title
// document.URL -- Knowing the URL of website
// document.scripts
// document.forms
// document.links
// document.images
// document.domain

// for query the css elements
//sel = document.querySelector('.container')
//console.log(sel)
//sel = document.querySelectorAll('.container')
//console.log(sel)

// Events in Javascript
function clicked(){
    console.log("The button clicked")
}

// for event load for document :
window.onload = function(){
    console.log("The document was loaded")
}
// ye event jab bhi apn click krenge  toh ye message ayega
firstcontainer.addEventListener('click',function(){
    //document.querySelectorAll('.container')[0].innerHTML = "<i> This was clicked</i>"
    console.log("Clicked")
})

// jab hover krenge tab ye ayega
//firstcontainer.addEventListener("mouseover",function(){
//    console.log('Mouse on container')
//})
//
//firstcontainer.addEventListener("mouseout",function(){
//    console.log("Mouse out container")
//})

//let prevHTML = document.querySelectorAll('.container')[0].innerHTML;
//firstcontainer.addEventListener("mouseup",function(){
//    document.querySelectorAll('.container')[0].innerHTML =prevHTML;
//    console.log("Mouse up click on container")
//})
//
//
//firstcontainer.addEventListener("mousedown",function(){
//    document.querySelectorAll('.container')[0].innerHTML ="<b> We have clicked</b>"
//    console.log("Mouse down click on container")
//})

// Arrow function :
summ = (a,b) =>{
    return a+b
}
// Particula time stamp pe kch chalane ke liye
logTime = () =>{
    document.querySelectorAll('.container')[0].innerHTML ="<b> SET INTERVAL FIRED</b>"
    console.log("I am your time log")
}

// setTimeout and setInterval
//setTimeout(logTime,2000);
// also we can use
clr=setInterval(logTime,2000);
// for stopping it clear Interval / settimeout
clearInterval(clr)

//// for storing variable in local
//localStorage.setItem('name','Prakash')
//localStorage.getItem('name')
//
//obj = {name : "Prakash",place :"xyz",marks:{english:100}}
//// console.log(obj) // not able to print
//// converting
//jso = JSON.stringify(obj)
//console.log(typeof jso)
//parsed = JSON.parse(`{"name" : "Prakash","place" :"xyz","marks":{"english":"100"}}`)
//console.log(parsed)