const person1 = {
    name : "arun",
    age : 40,
    location : "chennai",
    greet: function(){
        console.log("welcome");
    }
}
const details = Object.create(person1);//inherit properties from person1 object
console.log(details.name);
const objvalues = Object.values(person1); // creates an array with obj values
const objkeys = Object.keys(person1); // creates an array with obj keys
console.log(objvalues);
console.log(objkeys);
const objentries = Object.entries(person1);// returns an array of key/value pair in obj
console.log(objentries);
Object.preventExtensions(person1);//prevents adding a property to an object
person1.company = "Aspire";// property cant be added
console.log(Object.isExtensible(person1));//returns true if an object is extensible
Object.seal(person1);//prevents additions or deletions of new properties
console.log(Object.isSealed(person1));//returns true if an object is sealed
Object.freeze(person1);//prevents any changes to an object, read-only


const person2 = {
    name:"karthi",
    age:30
}
const person = Object.assign(person1,person2);// copies properties from one or more source objects(person2) to a target object(person1).
console.log(person);
const values = [
    ["one", 1],
    ["two", 2],
    ["three",3]
];
const fromentries = Object.fromEntries(values);// creates a new object as list of key/value form an array
console.log(fromentries)


function User(name, email, pass) {//object constructor function
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.company = "Aspire";
    }
const user1 = new User("arun", "abj3m@gmail.com", "12@abc");
const user2 = new User("kumar", "arun3m@gmail.com", "12@lmnc");
user1.location = "chennai";
console.log(user1, user2);



//spread operator
const numbers = [1, 2, 3];
function addNumbers(a, b, c) {
  return a + b + c;
}
console.log(addNumbers(...numbers));// expand the array into argument for func calls
const arr = [1, 2, 3];
const arr1 = [...arr];// copies an array 
console.log(arr1);

const user = { name: "arun", age: 30 };
const address = { location: "chennai"};
const newobj = { ...user, ...address };//merge objs
console.log(newobj);

//rest operator - user in func parameter and  destructuring
function sum(...numbers) {//collects arguments and store in number array
    return numbers.reduce((acc, num) => acc + num, 0);
 }
console.log(sum(1, 2, 3, 4));

const num = [1, 2, 3, 4, 5];
const [first, second, ...rest] = num;//array destructuring
console.log(first, second, rest);
