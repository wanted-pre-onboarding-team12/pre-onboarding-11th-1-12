import React, { useState } from "react";
import { IconCheck, IconLemon } from "../assets";
import styles from "./todoItem.module.scss";

const TodoItem = () => {
  // NOTE: 수정모드 state에 따라 UI가 달라져서 state만 살려둘게요.
  const [onModify, setOnModify] = useState(false);

  return (
    <li className={styles.wrap}>
      <label className={styles.checkLabel}>
        <input
          type="checkbox"
          // checked={modifiedTodo.isCompleted}
          // onChange={onChange}
        />
        <div className={styles.icon}>
          <IconLemon className={styles.lemon} />
          <IconCheck className={styles.check} />
        </div>

        {onModify || <span> {/* TODO: 투두 내용 넣어주세요 :) */}</span>}
      </label>

      {/* NOTE: 수정모드 input, buttons */}
      {onModify && (
        <form>
          <input
            type="text"
            name="todo"
            data-testid="modify-input"
            //  value={modifiedTodo.todo}
            //  onChange={onChange}
            className={styles.modifyInput}
          />
          <button
            //  value={id}
            type="submit"
            data-testid="submit-button"
            //   onClick={onUpdateToDo}
            className={styles.basicButton}
          >
            제출
          </button>
          <button
            // value={id}
            type="button"
            data-testid="cancel-button"
            className={styles.basicButton}
            // onClick={cancelModify}
          >
            취소
          </button>
        </form>
      )}

      {/*NOTE: 수정모드X -> 수정,삭제 buttons */}
      {onModify || (
        <>
          <button
            // value={id}
            type="button"
            name="modify"
            data-testid="modify-button"
            // onClick={onSetModifyMode}
            className={styles.basicButton}
          >
            수정
          </button>
          <button
            // value={id}
            name="delete"
            type="button"
            data-testid="delete-button"
            // onClick={onDeleteToDo}
            className={styles.basicButton}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
