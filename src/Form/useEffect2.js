import { useState, useEffect } from "react";

function Timer2() {
  const [count, setCount] = useState([{}]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setCount(json));
  }, []);

  return (
    <div>
      <h1>I've rendered {count.title} times!</h1>
      {count.map((item) => (
        <li key={item.id}>
          {item.title} {item.completed} {item.pending}
        </li>
      ))}
    </div>
  );
}

export default Timer2;
