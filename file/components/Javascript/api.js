// XMLHttpRequest
//GET method
const request = new XMLHttpRequest(); // creates xmlhttprequest object that acts as the interface b/w JS and server.
request.open('GET', "http://localhost:3000/users", true); //get details from server
request.onload = function () {
    if (request.status == 200) {
        console.log(request.responseText);
    }
    else {
        console.log("error " + request.status);
    }
};
request.onerror = function () {
    console.log("error");
}
request.send();

//POST method
const xhr = new XMLHttpRequest();
xhr.open('POST', "http://localhost:3000/users", true); //post details from server
xhr.setRequestHeader('Content-type', 'application/json'); //set the req/res data is formatted as json
xhr.onload = function () {
    if (xhr.status == 200) {
        console.log(xhr.responseText);
    }
    else {
        console.log("error " + xhr.status);
    }
};
request.onerror = function () {
    console.log("error");
}
const data = JSON.stringify({ 'data': 1 });
request.send(data);//send the data that need to stored

//DELETE
xhr.open("DELETE", "http://localhost:3000/users/2", true); //set true for async, false for sync


//Fetch API
//GET
fetch("http://localhost:3000/users")
    .then(response => response.json())  //Convert the response to JSON
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was an error!', error);
    });

//POST
fetch("http://localhost:3000/users", {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json' //Specify that body(req/res) will be JSON
    },
    body: JSON.stringify({
        name: 'arun',
        age: 30
    }),
})
.then(response => response.json()) //parse the json
.then(data => {
    console.log('data ', data);
})
.catch(error => {
    console.error('error:', error);
});

//DELETE
fetch("http://localhost:3000/users/2", {
    method: 'DELETE'
})
.then(response => {
    if(!response.ok){
        console.log("deleted");
    }
    return response.json();
})
.then(data => {
    console.log('data ', data);
})
.catch(error => {
    console.error('error:', error);
});

//PATCH
fetch("http://localhost:3000/users/2", {
    method:'PATCH',
    headers:('Content-type', 'application/json'),
    body:{
        name:'kumar'
    }
})
.then(response=>{
    if (!response.ok) {
        throw new Error('failed to update');
    }
    return response.json();
})
.then(data => {
    console.log('data ', data);
})
.catch(error => {
    console.error('error:', error);
});


//promise
const promise1 = new Promise ((resolve)=> setTimeout(resolve, 1000, 10));
const promise2 = Promise.reject('Error');
const promise3 = Promise.resolve(30);
Promise.all([promise1,promise2,promise3]) //If any promise rejects, Promise.all() will reject immediately
.then(resolve => console.log(resolve))
.catch(error => console.log(error));
Promise.allSettled([promise1,promise2,promise3]) //If any promise rejects, Promise.all() will reject immediately
.then(resolve => console.log(JSON.stringify(resolve)))
.catch(error => console.log(error));
Promise.race([promise1,promise2,promise3]) // returns a promise that settles as soon as the first promise in the input array settles
.then(resolve => console.log(resolve))
.catch(error => console.log(error));


const p1 = Promise.reject('Error1');
const p2 = Promise.reject('Error2');
const p3 = Promise.resolve('Success!');
Promise.any([p1, p2, p3])//returns a promise that resolves as soon as any of the promises in the array resolves
.then(value => console.log(value))
.catch(error => console.log(error));

const a = [1,'2',3,'four',5];
const numbers = a.filter((val)=>typeof val === 'number'); //filters only number
console.log(numbers);

