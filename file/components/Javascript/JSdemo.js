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

