import React from 'react';
import styles from './todo.module.scss';
import TodoItem from '../components/TodoItem';
import { IconCheck, IconLemon } from '../assets';

const Todo = () => {
  //  const [toDoList, setToDoList] = useState<ToDoObject[]>();

  return (
    <main className={styles.wrap}>
      <h1>To Do List ({/*toDoList?.length*/})</h1>
      <p>할 일을 추가하고, 완료하면 레몬🍋 을 클릭해보세요 :)</p>

      <form className={styles.form}>
        <input type="text" data-testid="new-todo-input" />
        <button type="submit" data-testid="new-todo-add-button">
          +
        </button>
      </form>

      <ul>
        {/*toDoList?.map((toDo: ToDoObject) => {
          return <ToDo />;
        })*/}
      </ul>
    </main>
  );
};

export default Todo;
