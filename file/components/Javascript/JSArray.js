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


