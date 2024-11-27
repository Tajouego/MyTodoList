import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"", done:false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"", done:false});
  }

  return (
    <form onSubmit={handleSubmit} className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          className={styles.moderninput}
          onChange={(e) => setTodo({name:e.target.value, done:false})}
          type="text"
          value={todo.name}
          placeholder="Enter todo item..."
        />
        <button className={styles.modernbutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
