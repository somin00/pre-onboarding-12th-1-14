import styled from "@emotion/styled";
import type { TodoItem } from "../apis/todo";
import { ChangeEvent, MouseEvent, FC, useState } from "react";

export type HandleUpdate = (
  e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
  todo: TodoItem,
  idx: number
) => void;

type Props = {
  todo: TodoItem;
  idx: number;
  handleUpdate: HandleUpdate;
  handleDelete: (id: number, idx: number) => void;
};

export const Todo: FC<Props> = ({ todo, idx, handleUpdate, handleDelete }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [todoState, setTodoState] = useState(todo.todo);

  return (
    <StyledTodoItem>
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleUpdate(e, todo, idx)}
          checked={todo.isCompleted}
        />
        {updateMode ? (
          <input
            data-testid="modify-input"
            defaultValue={todo.todo}
            onChange={(e) => setTodoState(e.currentTarget.value)}
          />
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
      <div>
        {updateMode ? (
          <>
            <button
              type="button"
              data-testid="submit-button"
              onClick={(e) => {
                handleUpdate(e, { ...todo, todo: todoState }, idx);
                setUpdateMode(false);
              }}
            >
              제출
            </button>
            <button
              data-testid="cancel-button"
              onClick={() => setUpdateMode(false)}
            >
              취소
            </button>
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
