import styled from "@emotion/styled";
import { TodoItem } from "../apis/todo";
import { FC, useState } from "react";

type Props = {
  todo: TodoItem;
  idx: number;
  handleUpdate: (todo: TodoItem, idx: number) => void;
  handleDelete: (id: number, idx: number) => void;
};

export const Todo: FC<Props> = ({ todo, idx, handleUpdate, handleDelete }) => {
  const [updateMode, setUpdateMode] = useState(false);

  return (
    <StyledTodoItem>
      <label>
        <input
          type="checkbox"
          onChange={() => handleUpdate(todo, idx)}
          checked={todo.isCompleted}
        />
        {updateMode ? (
          <input data-testid="modify-input" defaultValue={todo.todo} />
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
      <div>
        {updateMode ? (
          <>
            <button data-testid="submit-button">제출</button>
            <button data-testid="cancel-button">취소</button>
          </>
        ) : (
          <>
            <button
              data-testid="modify-button"
              onClick={() => setUpdateMode(true)}
            >
              수정
            </button>
            <button
              data-testid="delete-button"
              onClick={() => handleDelete(todo.id, idx)}
            >
              삭제
            </button>
          </>
        )}
      </div>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
