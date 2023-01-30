"use client";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useState } from "react";
import { Todo } from "@/model/model";
import TodoAdder from "@/components/TodoAdder";
import TodoList from "@/components/TodoList";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  return (
    <section>
      <div className={styles.container}>
        <div className="headingContainer">
          <h2 className={styles.title}>TODO APPLICATION</h2>
        </div>
        <div className={styles.headerContainer}>
          <TodoAdder
            todo={todo}
            setTodo={setTodo}
            todos={todos}
            setTodos={setTodos}
          />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </section>
  );
};

export default Home;
