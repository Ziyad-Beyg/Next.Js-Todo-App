import { Todo } from "@/model/model";
import React, { useState, useRef, useEffect } from "react";
import { MdEdit, MdDone, MdDeleteOutline, MdSave } from "react-icons/md";
import { GrUndo} from "react-icons/gr";

import styles from "../app/page.module.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const doneTodo = (status: boolean) => {
    setIsCompleted(!isCompleted);
    todo.isDone = !status;
  };

  const editTodo = () => {
    if (!isCompleted) {
      setEdit(!edit);
    }
  };

  const updateTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editedTodo } : todo
      )
    );
    setEdit(!edit);
  };
  return (
    <div className={styles.singleTodo}>
      <div className={styles.todoInputContainer}>
        {edit ? (
          <input
            className={styles.todoInput}
            ref={inputRef}
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
        ) : isCompleted ? (
          <s className={styles.todoText}>{todo.todo}</s>
        ) : (
          <span className={styles.todoText}>{todo.todo}</span>
        )}
      </div>
      <div className={styles.iconsComponent}>
        <span>
          {edit ? (
            <span className={styles.iconContainer} onClick={() => updateTodo(todo.id)}>
              <MdSave className={styles.save} />
            </span>
          ) : (
            <span style={{display: isCompleted ? 'none' : 'block'}} className={styles.iconContainer} onClick={() => editTodo()}>
              <MdEdit className={styles.edit} />
            </span>
          )}
        </span>
        {
          isCompleted ? 
        <span  className={styles.iconContainer} onClick={() => doneTodo(todo.isDone)}>
          <GrUndo className={styles.done} />
        </span> :
        <span style={{display: edit ? 'none': "block" }} className={styles.iconContainer} onClick={() => doneTodo(todo.isDone)}>
        <MdDone className={styles.done} />
          </span>
        }
        <span className={styles.iconContainer} onClick={() => deleteTodo(todo.id)}>
          <MdDeleteOutline className={styles.delete} />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
