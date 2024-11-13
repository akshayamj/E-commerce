import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setCount(json));
  }, []);

  return <h1>I've rendered {count.title} times!</h1>;
}

export default Timer;
