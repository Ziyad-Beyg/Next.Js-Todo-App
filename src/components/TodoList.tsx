import { Todo } from "@/model/model";
import React from "react";
import SingleTodo from "./SingleTodo";
import styles from "../app/page.module.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className={styles.todoContainer}>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
