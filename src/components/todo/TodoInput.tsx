import { FC, PropsWithChildren } from 'react';

type Props = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export const TodoInput: FC<PropsWithChildren<Props>> = ({ handleSubmit }) => {
  return (
    <>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' data-testid='new-todo-input' name='todo' />
        <button type='submit' data-testid='new-todo-add-button'>
          추가
        </button>
      </form>
    </>
  );
};
