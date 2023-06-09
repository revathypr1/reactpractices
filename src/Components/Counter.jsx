import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Counter() {
  useEffect(() => {
    console.log("mounting....");
    return () => {
      console.log("umounting..");
    };
  }, []);
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Hello, I am components :{count}</h1>
    </div>
  );
}

export default Counter;
