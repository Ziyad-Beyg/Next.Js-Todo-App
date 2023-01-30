import { Todo } from "@/model/model";
import React from "react";
import styles from "../app/page.module.css";


interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoAdder: React.FC<Props> = ({ todo, setTodo, todos, setTodos }) => {
  const addTodo = () => {
    if (todo.trim() === "") return false;
    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  };
  const deleteAll = () => {
    setTodos([]);
  };
  return (
    <div className={styles.headerComponent}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Your Todo!"
        className={styles.inputField}
      />
      <div className={styles.btnContainer}>
      <div className={styles.neonButton} onClick={addTodo}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Add Todo
      </div>
      <div className={styles.neonButton1} onClick={deleteAll}>
        <span></span>
        <span></span>
        <span></span>
        <span></span> 
        Delete All
      </div>
      </div>
    </div>
  );
};

export default TodoAdder;
