import React, { useState, useEffect } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  const handleClick = () => {
    setCount(count + 1);
    if (count === 3) {
      setError(new Error("Error Occured"));
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}


// arr = [1,[2,3],5,6,9];
// const a = arr.flat();

// for(let i=1; i<=10; i++){
//     const include = a.includes(i);
//     if(!include){
//         console.log(i);
//     }
// }


// const arr1 = [1,[2,3],5,6,9];
// const a = arr.flat();
// const arr2 = [1,2,3,4,5,6,7,8,9,10];

// for(let i=0; i<arr2.length; i++){
//     const b = a.includes(arr2[i]);
//     if(!b){
//         console.log(arr2[i]);
//     }
// }