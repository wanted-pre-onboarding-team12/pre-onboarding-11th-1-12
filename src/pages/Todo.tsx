import React, { useState } from 'react';
import styles from './todo.module.scss';
import { ITodoObject } from '../models/api';
import { IconLemon } from '../assets';
import TodoItem from '../components/TodoItem';
import { createTodo, getTodos } from '../service/todo';

const Todo = () => {
  const [toDoList, setToDoList] = useState<ITodoObject[]>();
  const [newToDo, setNewToDo] = useState('');

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setNewToDo(value);
  };

  const onGetToDos = async () => {
    const response = await getTodos();
    setToDoList(response.data);
  };

  const onCreateToDo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newToDo) return;

    await createTodo({
      todo: newToDo,
    });

    onGetToDos();
    setNewToDo('');
  };

  return (
    <main className={styles.wrap}>
      <h1>To Do List ({toDoList?.length})</h1>
      <p>
        할 일을 추가하고, 완료하면 레몬
        <IconLemon />을 클릭해보세요 :)
      </p>

      <form onSubmit={onCreateToDo} className={styles.form}>
        <input
          type="text"
          data-testid="new-todo-input"
          value={newToDo}
          onChange={onChange}
        />
        <button
          type="submit"
          disabled={!newToDo}
          data-testid="new-todo-add-button"
        >
          +
        </button>
      </form>

      <ul>
        {toDoList?.map((todo: ITodoObject) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
              id={todo.id}
              updateFunction={onGetToDos}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Todo;
