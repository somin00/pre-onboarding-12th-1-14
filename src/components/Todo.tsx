import styled from "@emotion/styled";
import { TodoItem } from "../apis/todo";
import { FC } from "react";

type Props = {
  todo: TodoItem;
  idx: number;
  handleUpdate: (todo: TodoItem, idx: number) => void;
  handleDelete: (id: number, idx: number) => void;
};

export const Todo: FC<Props> = ({ todo, idx, handleUpdate, handleDelete }) => {
  return (
    <StyledTodoItem key={todo.id}>
      <label>
        <input
          type="checkbox"
          onChange={() => handleUpdate(todo, idx)}
          checked={todo.isCompleted}
        />
        <span>{todo.todo}</span>
      </label>
      <div>
        <button data-testid="modify-button">수정</button>
        <button
          data-testid="delete-button"
          onClick={() => handleDelete(todo.id, idx)}
        >
          삭제
        </button>
      </div>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
