import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./my-style.module.css";
function Timer3() {
  const [count, setCount] = useState([{}]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.data)
      .then((json) => setCount(json));
  }, []);

  return (
    <div>
      <h1 className={styles.bigblue}>I've rendered {count.length} times!</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {count.slice(0, 10).map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "Completed" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timer3;
