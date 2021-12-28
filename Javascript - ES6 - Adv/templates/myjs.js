"use strict";
// console.log("Starting ES6...")
// // var let const some uses 

// var a = "Hello"
// var a = "world" // changing 
// a = "Prakash"  // reassing
// console.log(a)

// let b = "Hello"
// // let b = "World"// Here is not possible throw error 
// b = "aY"  

// console.log(b) // 

// // const will declared once not will changed
// const c = "hello"
// // c = "WEll"
// console.log(c)


// // Because it is global 
// if (1==1){
//     var a = "Hello";
// }
// console.log(a) 

// // if we use let it throw error
// if (1==1){
//     let e = "Hello";
//     // but if we use inside it will work
//     console.log(e)
// }
// // console.log(e) 

// // same will be apply on const

// for (var a =0;a<6;a++){
//     document.write(a + "<br>")
// }
//     console.log(a);
// // but if we do with let it throw error

// for (let j =0;j<6;j++){
//     document.write(j + "<br>")
// }
//     // console.log(j);

// // Template String or Template Literals
// var user  = "Prakaysh";
// var greet = "Hello " + user; // for solution of + operation literals
// document.write(greet)

// // Template String 
// var greet = `<br> hello  ${user}`
// document.write(greet)
// let name  = "Ays"
// let name1 = "Prakash"
// document.write(`<br><b>Hello ${name} , ${name1}</b>`)

// // function with litera
// function fullname(p1,p2){
//     return `${p1} ${p2}`
// }
// let hello = `<br>Hello ${fullname('Ram','sita')}`
// document.write(hello)

// // arrow function 
// let hello1 = () => console.log('aP')
// hello1();

// let welcome = (val,n1) => document.write(` <br>hello ${val} ${n1}`)
// welcome('Prakaysh',2)

// // Rest Operator ... same as args python 
// function sum(name,...args){
//     sum = 0 
//     for(let i in args){
//     sum += args[i];
// }
// console.log(sum,name)
// }

// document.write(sum('Prak',1,12,2,1))
// // Normal sum
// function sum1(){
//     console.log(arguments)
//     let sum = 0;
//     for(let i in arguments){
//         sum += arguments[i]
//   }

//     document.write(sum + "<br>");
// }
// sum1(23,23,23,2,1)

// function co(id,name,...args){
//     document.write(`${id} ,${name}`)
//     sum = 0
//     for (var i in args){
//         sum += args[i]
//     }
//     document.write(sum,"<br>")
// }

// co('1','Prakash ',12,12,1,122)


// // let ,var,const,function,arrow function,rest operator
// // Practice again when you come here again
// function wel(val) {
//     document.write(`Hello Merry Christmas ${val}`)
// }
// wel("Prakaysh");
// wel1 = (val) => document.write(`Have a great day ${val}`)
// wel1("Prakay")
// function sum12(address,...args){
//     document.writeln(`<br>address :${address}`)
//     sum1 = 0 
//     for (let i in args){
//         sum1 += args[i]
//     }
//     document.write("<br>",sum)
// }
// sum12("XYZ",1,123,1,2,1231,2)

// // Spread Operator :  same as rest but it accept as arr argument in sep way
// function arr_acc(name,...args){
//     document.writeln("<br>Name: ",name)
//     sum = 0 
//     for (let i in args){
//         sum += args[i]
//     }
//     document.writeln(`${sum}`)
// }
// arr1 = [1,13,2,31,2,21,1]
// // here spreaad applies
// arr_acc("Pra",...arr1)
// var var1 = {name : "Praysh",course:"MBA"}
// var var2 = {address:'xyz'}
// var var3 = {...var1,...var2}
// console.log(var3) 

// // object literals
// let name2 = "vjk"
// let course = "MBA";

// var obj = {
//     name :name2,
//     course : course
// }

// // direct we can access : if name same
// var obj1 = {name2,course}
// console.log(obj1)

// // call function in obj
// let a1 = "place"
// var obj3 = {
//     ["Nameof" + a1] : "Sahara desert",
//     course : course,
//     detail : function(){ return `${this.Nameofplace} is a student of ${this.course}`}
// }
// // OR

// var obj3 = {
//     ["Nameof" + a1] : "Sahara desert",
//     course : course,
//     // detail(){ return `${this.Nameofplace} is a student of ${this.course}`}
//     //also new name in quote also poss
//     'detail show'(){ return `${this.Nameofplace} is a student of ${this.course}`}
// }

// // console.log(obj3['detail']()) // CALL FUNCTION LIKE IN ecma 6.0
// console.log(obj3)
// console.log(obj3['detail show']()) // CALL FUNCTION LIKE IN ecma 6.0

// // Destructuring Array 
// let user3 = ['Pr',12,'dsds',['Male',25000]]
// // let [name3,age,city,gen,sal] = user3;
// let [name3,...args] = user3;
// console.log(name1,args)

// function use(){
// return ['sds',22,'cdd']
// }
// let [nm,ag,cit] = use()
// console.log(nm,ag,cit)

// // Destructuring object 
// let us1 = {
//     n1 : "xx",
//     ag1 : 22
// }
// let {n1:m1,ag1:a5} = us1
// console.log(m1,a5)
// // OOPS :
// class hello3{
//     message(){
//         console.log("Hello every one");
//     }
//     greet(){
//         console.log("Hi !")
//     }
// }
// let a10 = new hello3()
// a10.message();
// a10.greet();

// // Type of method : Constructor / Prototype / Static
// // constructor auto call 
// // calling : prototype
// // static : not need obj called by class name

// class student{
//     constructor(name,marks){
//         // here variables defined
//         // let name22 = name
//         this.name22 = name
//         this.marks1 = marks
//         console.log("Constructor called")
//     }
//     hello(){
//         console.log("Hello",this.name22,this.marks1)
//     }
    
//     static staticmethod(){
//         console.log("Static fuyn")
//     }

// }
// let a11 = new student("Warrior",33)
// let b11 = new student("Shyam",43)

// // a11.name22 = "Prays"
// a11.hello()
// b11.hello()
// student.staticmethod() // with class  

// // Inheritance :
// // class employee{
// //     constructor(name){
// //         console.log("Constructor called by employee",name)
// //     }
// // }
// // class manager extends employee{
// //     constructor(name){
// //         super();
// //         console.log("Constructor called by manager",name)
// //     }
// // }

// // let t1 = new manager("Ravi")
// // let e1 = new employee("Shyam")

// class employee{
//     constructor(name,age,salary){
//         this.empname = name;
//         this.empage = age;
//         this.empsalary = salary;
//         console.log("Constructor called by employee")
//     }
//     info(){
//         document.writeln(`<h3> Employee class </h3>
//                     name : ${this.empname}<br>
//                     age : ${this.empage}<br>
//                     salary :${this.empsalary}<br>`)
//     }
// }
// class manager extends employee{
    
//     info(){
//         let ta = 1000;
//         let pa = 300;
//         let totalsalary = this.empsalary + ta + pa;
    
//         document.writeln(`<h3> Manager class </h3>
//                     name : ${this.empname}<br>
//                     age : ${this.empage}<br>
//                     salary :${totalsalary}<br>`)
//     }
// }

// let t1 = new manager("Ravi",23,44553);
// let b1 = new employee("Vijay",22,12000);
// t1.info()
// b1.info()


// // Modules : 
// // we have file.js or file2.js : using each other
// // export import  

// // Promise:
// // 2 cases :
// // Promise ==>> Resolve ==>> then 
// // Promise ==>> rejec t ==>> catch
// case of resolve,reject if condition is true or false based
// var complete = false
function prom(a,b) {
    // let prom = new Promise(function(resolve,reject){
    return new Promise(function (resolve, reject) {
       console.log("Fetching data please wait ...")
       c  = a/b 
       setTimeout(() =>{
        if (a,b) {
            resolve(`Your answer is ${c}`)
        } else {
            reject(`Failed !!!`)
        }
       },1000)
    })
};
// let onfulfillment = (result) => {
//     console.log(result)
// }
// let onRejection = (error) => {
//     console.log(error)
// }

prom(5,2).then((result) => {
    console.log(result)
}).catch((result) => {
    console.log(result)
});
// prom(false).catch(onRejection)
// as we seee promised , promisestate : fullfilled , promise result : succesfully
// 


// function prom1() {
//     // let prom = new Promise(function(resolve,reject){
//     return new Promise(function (resolve, reject) {
//        console.log("Fetching data please wait ...")
        
//        setTimeout(() =>{
//         $.get("https://jsonplaceholder.typicode.com/users",function(data){
//             resolve(data);
//         }).fail(err =>{
//             reject("Fail to load JSON");
//         })
//        },1000)
//     })
// };

// prom1().then((result) => {
//     console.log(result)
// }).catch((result) => {
//     console.log(result)
// });

// Promise : For condition check
// Promise all: Covers all promises 
//  Resolve : if all resolve
// reject : if any promise reject 

// let p1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("The first promise resolved");
//         resolve(10)
//     },1*1000);
// });

// let p2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("The second promise resolved");
//         resolve(20)
//     },2*1000);
// });

// let p3 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("The third promise resolved");
//         resolve(30)
//     },3*1000);
// });

// var total = 0
// Promise.all([p1,p2,p3]).then((result) =>{
//     for (var i in result) {total += result[i]}
//     console.log(`results :${result}`);
//     console.log(`Total: ${total}`)
// }).catch((error) =>{
//     console.log(`Error :${error}`);
// });

// // 
// let promisecall = function(returndata,message){
//    return function(resolve,reject){
//         setTimeout(()=>{
//             console.log(`The ${message} promise has resolved`)
//             resolve(returndata)
//         },returndata * 100)
//     }
// };
// let p11 = new Promise(promisecall(10,'First'))
// let p12 = new Promise(promisecall(20,'Second'))
// let p13 = new Promise(promisecall(30,'Third'))
// let p14 = new Promise(function(resolve,reject){
//     reject("The 4th Promise rejected")
// })

// var total = 0
// Promise.all([p11,p12,p13]).then((result) =>{
//     for (var i in result) {total += result[i]}
//     console.log(`results :${result}`);
//     console.log(`Total: ${total}`)
// }).catch((error) =>{
//     console.log(`Error :${error}`);
// });

// Ajax :
// XMLhttpRequest    Server
// request  response
// 5 Steps : Ready State
// 0 request not intialised
// 1 server connection established
// 2 request recived
// 3 processing request
// 4 request finished and response is response is ready

// in Response we get 
// response text 
// or
// responsexml
// Status : 200 ok 
//         403 forbidden
//         404 not found


// function loadData(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.xhttp == 4 && this.status == 200){
//             document.getElementById('Demo').innerHTML[0] = this.responseText
//         }
//        else if(this.xhttp == 4 && this.status == 404){
//             document.getElementById('Demo').innerHTML = "file not found"
//         }
//     };
//     xhttp.open('GET','https://jsonplaceholder.typicode.com/users',true);
//     xhttp.send();
// }


//  Javascript : Fetch() Method 
// Which will help in all crud

// fetch("readme.json")
// .then(response => response.text())
// .then(data=>document.write(data))

// get
// For accessing and see api values using fetch
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data=>{console.log(data)
// for (var x in data){
//     document.write(`${data[x].name} ,${data[x].username},${data[x].address.city} <br>`);
// }
// })
// .catch((error) => document.write("Cant fetch data"));

// Insert
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'pRAysh',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//       title: 'aysh',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

    // Async : will resolve promise complexity resolve , reject not need
// It also return promise '
// async function test(){
//     return "Hello";
// }
// test().then((result) =>{
//     console.log(result)
// })

// let test = async () => "hello"
// test().then((result) => console.log(result))

// await is use in inside 
async function test(){
    // possible we will try all this with try and catch 
    try{
    // console.log("2 : Message");
    // await console.log("3 : Message");
    // const response = await fetch("readme1.json")
    // console.log("3 : Message");
    // console.log("4 : Message");
    // const norm = await response.json()
    // we can convert all into one line like this 
    return (await fetch("readme.json")).json();    
}catch(error){
    console.log("There is some error")
}
}


// console.log("1 : Message");
// let a = test()
test().then((res) =>{
    console.log(res)
})
// .catch((error) =>{
//     document.write("There is some error")
// })

//console.log("4 : Message");
//console.log(a)

// Data type : Symbol

let v = Symbol("Pra")
let j = Symbol("Pra")
console.log(v == j)

let obj2 = {
    name : "Praysh",
}
obj2[v] = "da"
obj2[j] = "say"
console.log(obj2)
console.log(JSON.stringify(obj2))

// iterators : For accessing values
let number  = [100,200,300,400,500];
let iter1=  number[Symbol.iterator]();
// console.log(iter1.next().value);
// console.log(iter1.next().value);
// console.log(iter1.next().value);
let res = iter1.next()
while(!res.done)
{
    console.log(res.value)
    res = iter1.next()

}

// Generators : 

function *gentest(){
    console.log('First M')
    yield 'Sec M'
    console.log('Thir M')
    yield '4 M'    
}

let g = gentest()
console.log(g.next())
console.log(g.next())



// Strict Mode  : Know us error if we not declare somethinng correctly
let a = "12"
console.log(a)

function test(){
   "use strict"
    b = 20;
}





