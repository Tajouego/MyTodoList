import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name == name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const condition = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={condition} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <button
          onClick={() => handleDelete(item)}
          className={styles.itemButton}
        >
          Delete
        </button>
      </div>
      <hr className={styles.line} />
    </div>
   
  );
}
