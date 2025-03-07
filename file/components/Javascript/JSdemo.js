//  Objects
const Details = {
    name: "Arun",
    id: 1234,
    message:function(){ //anonymous function
        return `Hello, ${this.name}`;
    },
    hello(){
        console.log("Objects can ba have functions inside it");
    }
};
console.log(Details.name);
console.log(Details.message());
Details.job = "Engineer"; //add to object
delete Details.id; //delete from object
console.log(Details);
console.log(Details.hello());

//Arrays methods
const arraydemo = ["one", "two", "three"];
arraydemo.push("four");// add at end
console.log(arraydemo);
arraydemo.pop();//delete at end
arraydemo.unshift("zero");// add at first
console.log(arraydemo);
arraydemo.shift();// remove at first
console.log(arraydemo);
console.log(arraydemo.join("_"));//join array values with "_"
console.log(arraydemo.slice(1,2));// it takes from index 1 to index 2 , exclude index 2
arraydemo.splice(1,3,2,3,"four");//  Removes 3 elements starting from index 1, and adds 2, 3 and "four"
console.log(arraydemo);
arraydemo.forEach((arrayelements)=>console.log(arrayelements)); //execute the fn once for every array element, no return
arr = [1,2,3,4]
result = arr.map((value)=>value+2);//create new array, with calling a fn on every elements
console.log(result);
filterdemo = arr.filter((value)=>value%2 ==0); //create new array which passes the test implemented by the fn
reducedemo = arraydemo.reduce((acc,crr)=>{ //Applies a fn to accumulate values into a single result.
    return (acc + ', ' + crr );
});
console.log(arr.find((value)=>value>3)); //return the first element that satisfy the condition
console.log(arr.some((value)=>value>3)); // return only boolean, check atleast 1 element satisfy the condition
console.log(arr.every((value)=>value>3));// return only boolean, check all element satisfy the condition
console.log(arr.include(2));// return only boolean, check array contains the element
console.log(arraydemo.indexOf("Four"));// return the index of the element
console.log(arraydemo.sort());
console.log(arraydemo.reverse());
nestedarray = [1,2,["one", 3],["four",5]]; //Flattens a nested array into a single array.
console.log(nestedarray.flat());
const text ='hello world'//Array.from - create new array-like object from various types of iterable objects
console.log(Array.from(text, (element)=>element + '_'));//optionally take a map function to apply some transformation to each element

//closure
function outerfuntion(){ // closure occurs when a function has access to variables from its outer function's scope, even after the outer function has completed execution.
    let value = 0;
    function innerfunction(){
        console.log(value+1);
    }
    return innerfunction;
}
const closure = outerfuntion();
closure();

// Asynchronous Javascript
console.log("start");
setTimeout(()=>{
    console.log("Asynchronous execution");
},2000);
console.log("end");

//callback function
function demo(callback){
    setTimeout(()=>{
        console.log("fetch data");
        callback();//execute after the data is fetched
    },1000);
}
demo(()=>{
    console.log("call back function execution");
});

//promise
let promise = new Promise((resolve, reject)=>{
    let success = true;
    setTimeout(()=>{ //A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
        if(success){
            resolve("Operation completed");
        }
        else{
            reject(("operation failed"));
        }
    },1000);
})
promise.then((message)=>{  //handling the promise
    console.log(message);
}).catch((error)=>{
    console.log(error);
})
//async/await
async function fetchdata(){ 
    const response = await fetch("http://sample.com"); //wait to fetch data
    const data = await response.json(); //wait for response to convert to json
    return data;
}
fetchdata().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

//event handling
//add event listener
document.getElementById("div").addEventListener("click",()=>{  //(event, callback)
    alert("clicked");
})

//remove event listener
function buttonclick(){
    alert("button clicked");
}
const button = document.getElementById("button");
button.addEventListener("click",buttonclick);

button.removeEventListener("click", buttonclick);

//mouse event
document.getElementById("image").addEventListener("mouseover", function(){
    console.log("Mouse is over the image");
});

//keyboard event
document.getElementById("div").addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
        console.log("Enter key is clicked");
    }
})

//DOM manipulation - use Js to interact and modify structure, content, or style of a web page dynamically

//selecting elements
const id = document.getElementById('button'); // refers to the 1st element with id="button"  
const classname = document.getElementsByClassName('maindiv'); // refers all the element with same class name 
const tag = document.getElementsByTagName("div");
const ptag = document.querySelector('p'); // returns the 1st element that matches the css selector
const classselector = document.querySelectorAll(".divclass"); //returns a nodelist of all eelements matches css selector

//create,remove elements
const newdiv = document.createElement('div'); //creates a new element
newdiv.textContent = "hello";
document.body.appendChild(newdiv); // append the new element to the end of the parent node(here body)
document.body.removeChild(newdiv); // remove the element from the DOM

//modifying attributes and content
const buttonid = document.getElementById("buttonid");
buttonid.setAttribute("href", "http://sample.com"); // create a new attribute to the element
const hrefvalue = buttonid.getAttribute("href"); //returns the value of the attribute
buttonid.removeAttribute("href"); //removes the attribute from the element

const divtag = document.getElementById("divtag")
divtag.innerHTML = "<p>Hello</p>"; // innerhtml allows to get or set html content inside an element.
divtag.textContent = "New content"; // textcontent allows to get or set text content of an element

//error handling
//try catch block
try{
    let a=2;
    let b=0;
    let c=a/b;
    if(b===0){
        throw new Error("Divisor not be 0");
    }
}catch(error){
    //error objects
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)// stack trace shows error location
}
finally{ // it will always execute no matter what happen in try and catch block 
    console.log("finally block will always run")
}

// asynchronous error handling
//promises, async await
async function promisedemo(){

    return new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            try{
                let data = undefinedvalue;
                resolve(data);
            }catch(error){
                reject(error.message);
            }
        },1000);
    });
}
promisedemo().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

//ES6 Features
//destructuring
let number = [1,2,3]; //array destucturing - unpacks the array elements, assign them to a variable
let [a,b,c] = number;
console.log(a,b,c);

let person = { // obj destructuring allows to extract properties and assign to a variable
    username:"arun",
    location:"chennai"
};
let [username, location]= person;
console.log(username, location);

//destructuring in function parameters
function demo({name, age}){
    console.log(`I am ${name}, My age is ${age}`); //template literal ``
}
let data = {
    name:'arun',
    age:25
}
demo(data);

//map and set
const map = new Map(); //map - contains key value pair, key can be any data type
map.set("name", "arun"); //set - contains unique value
map.set("id", 200);
console.log(map);

const set = new Set();
set.add(1);
set.add(2);
set.add(2);//set doesnt accept duplicates
console.log(set)

//js class syntax
class Person{
    constructor(name){
        this.name = name;   
    }

    greet(){
        console.log(`Hello, ${this.name}`);
    }
}
const details = new Person("Arun")
details.greet();

// inheritance
class parent{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}
class child extends parent{
    greet(){ //override parent function
        console.log(`Good morning, ${this.name}`);
    }
}
const demo = new child("arun");
demo.greet();

//spread operator - used to expand elements of an array or object.
const array1 = [1,2,3,4];
const array2 = [5,6,7,8];
const combine = [...array1,...array2];
console.log(combine);

//rest operator - collects the remaining elements into a single variable.
const [val1, val2, ...restNumbers] = [10, 20, 30, 40, 50];
console.log(val1, val2);
console.log(restNumbers);

//funcion composition - Combining multiple functions to produce a new function.
const toUpperCase = str => str.toUpperCase();
const exclaim = str => str + "!";
const shout = str => exclaim(toUpperCase(str));
console.log(shout("hello"));


//Web APIs - allow developers to interact with the browser, server, and external services
document.getElementById("demo").textContent = "Hello, World!"; //DOM api
fetch("https://localhost:2000/user") //fetch api
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
localStorage.setItem("name", "Arun"); //localStorage api
console.log(localStorage.getItem("name"));
sessionStorage.setItem("sessionKey", "Session Data"); //sessionStorage api
console.log(sessionStorage.getItem("sessionKey"));
document.cookie = "username=Arun;"; //web storage api
console.log(document.cookie);

