import { ChangeEvent, MouseEvent, FC, useState, PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import type { TodoItem } from '../../apis/todo';

export type HandleUpdate = (
  e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
  todo: TodoItem,
  idx: number,
) => void;

export type HandleDelete = (id: number, idx: number) => void;

type TodoCardProps = {
  todo: TodoItem;
  idx: number;
  handleUpdate: HandleUpdate;
  handleDelete: (id: number, idx: number) => void;
};

type CustomButtonProps = {
  testId: 'submit' | 'cancel' | 'modify' | 'delete';
  onClickHandler: ((e: MouseEvent<HTMLButtonElement>) => void) | (() => void);
};

export const TodoCard: FC<TodoCardProps> = ({ todo, idx, handleUpdate, handleDelete }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [todoState, setTodoState] = useState(todo.todo);

  const updateSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    handleUpdate(e, { ...todo, todo: todoState }, idx);
    setUpdateMode(false);
  };

  const modeToggleHandler = (mode: boolean) => {
    setUpdateMode(mode);
  };

  return (
    <StyledTodoItem>
      <label>
        <input
          type='checkbox'
          onChange={e => handleUpdate(e, todo, idx)}
          checked={todo.isCompleted}
        />
        {updateMode ? (
          <input
            data-testid='modify-input'
            defaultValue={todo.todo}
            onChange={e => setTodoState(e.currentTarget.value)}
          />
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
      <div>
        {updateMode ? (
          <>
            <CustomButton testId='submit' onClickHandler={e => updateSubmitHandler(e)}>
              제출
            </CustomButton>
            <CustomButton testId='cancel' onClickHandler={() => modeToggleHandler(false)}>
              취소
            </CustomButton>
          </>
        ) : (
          <>
            <CustomButton testId='modify' onClickHandler={() => modeToggleHandler(true)}>
              수정
            </CustomButton>
            <CustomButton testId='delete' onClickHandler={() => handleDelete(todo.id, idx)}>
              삭제
            </CustomButton>
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

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  testId,
  onClickHandler,
}) => {
  return (
    <button data-testid={`${testId}-button`} onClick={onClickHandler} type='button'>
      {children}
    </button>
  );
};
