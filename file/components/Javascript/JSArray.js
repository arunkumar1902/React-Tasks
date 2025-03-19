// Array methods
const arr = ['one', 'two', 'three'];
const stringconversion = arr.toString();// converting array to string
console.log(arr.length);
console.log(arr[arr.length-1]); //display last element of the array
arr[arr.length] = 'four';
console.log(Array.isArray(arr)) //return true if arr is an array
console.log(arr.at(2)); // display the element with index 2 - overcome -ve bracket indexing
console.log(arr.join("-"));
let pop = arr.pop(); // pop variable contains the popped out value
let push = arr.push("five"); // push return the new array length
console.log(pop,push);
let shift = arr.shift(); // return the shiftted value(1st value)
let unshift = arr.unshift("six");//return new array size
console.log(shift, unshift);
let del = delete arr[1]; //delete leaves undefined holes in array

const arr1 = [1,2,3,4];
const arr2 = ['five', 'six'];
const newArr = arr1.concat(arr2,"hello");// return a new array by combing the existing array & can merge a new value also
console.log(newArr);
console.log(newArr.copyWithin(2,0,5)); // copies the elements from 0 to 5 from index 2 - doesnt change length
const arr3 = [[1,2],[3,4],[5,6]];
console.log(arr3.flat());
console.log(arr1.flatMap((x)=>[x,x+10])); //1st mapp all elements and create a new array by flattenning the array
arr1.splice(0,2); //removes 2 element from 0 without empty 
arr1.splice(1,3,"one","two","three"); // add 3 elements from index 0
arr1.splice(2,0,"five","six","seven"); // add new elements from index 2
const tospliced = arr1.toSpliced(0,2);
console.log(tospliced); //creates new array without changing original array
const slice = arr1.slice(1);//creates a new array, remove the 1st element
console.log(newArr.indexOf(1,2)); //search & return the 1st index of the element , 2nd-where to start the search
console.log(newArr.lastIndexOf(1,2)); //return the index of last occurence of the element
console.log(newArr.includes(1)); //return boolean
console.log(newArr.find(x=>x%2===0)); //returns the 1st element that passes the test func, returns undefined if not found
console.log(newArr.findIndex(x=>x<10)); //return index of the 1st element that passes the test func, return -1 if not found
console.log(newArr.findLast(x=>x<10));//return the 1st element that passes the test func, starts from end of the array
console.log(newArr.findLastIndex(x=>x<10));//return the index of 1st element that passes the test func, finds from end of the array



// array sorting
console.log(newArr.sort());//sort the original array
console.log(newArr.reverse());
const sorted = newArr.toSorted(); //create a new array and store the sorted elements
const reversed = newArr.toReversed();
const arraynumbers = [1,10,4,2,8,5];
arraynumbers.sort((a,b)=>a-b); //sort by assending order
arraynumbers.sort((a,b)=>b-a); // sort by decending order
const arraystring = ["a","m","k","h"];
arraystring.sort(); //sort by accending order
arraystring.reverse() //for decending, 1st sort and then reverse
const numberString = [1,"z",10, "d", 4];
numberString.sort((a,b)=>{
    if(typeof a === 'number' && typeof b ==='number'){
        return a-b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.localeCompare(b); //localcompare is used to sort only strings, compare the 2 elements
    }
    if(typeof a === 'number'){
        return -1 //moves the num before string
    }
    return 1 //move string before num
})

console.log(Math.min.apply(null, arraynumbers)); //returns the min value(only for numbers)
console.log(Math.max.apply(null, arraynumbers)); //returns the max value
// apply() is used to send the array elements as individual argument to math.min method

//array iteration methods
newArr.forEach((val, index, arr)=>{// iterate every element in an array and can modify the original array based on condition
    arr[index] = val + " foreach";
})
console.log(newArr);

const maparray = newArr.map((val, index,arr)=>{
    return val + " map";// iterate every element in an array and create new array
})
console.log(maparray);
console.log(newArr);

const filterarray = arraynumbers.filter((val)=>{
    return val%2==0;// filter creates new array with elements that pass the test function
});
console.log(filterarray);
const reducearray = arraynumbers.reduce((accumulator, value)=>{
    return accumulator + " " + value;//reduce array into a single value, does not change the original array 
})
console.log(reducearray);
const reduceright = arraynumbers.reduceRight((accumulator, value)=>{
    return accumulator + " " + value;//reduce array from right to left
})
console.log(reduceright);
console.log(arraynumbers.every((val)=>val%2==0));//return boolean, checks all elements are pass the test function
console.log(arraynumbers.some((val)=>val%2==0));//return boolean if atleast 1 element pass the test function
const text = " hello world ";
console.log(Array.from(text, val => val + " !" ));//return an array
const keys = Array.from(arraynumbers.keys());// keys return a new array iteratir object, contains index of an array
console.log(keys);
const entries = Array.from(arraynumbers.entries());//entries return with key/value pairs
console.log(entries);
const arraywith = arraynumbers.with(1,3);// update element without altering original, 1st parameter - index, 2nd - value
console.log(arraywith);
 
