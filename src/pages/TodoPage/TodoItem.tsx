import { Todo } from '../../types/Todo';
import { UpdateTodoRequest, updateTodo } from '../../apis/api/todos/updateTodo';
import { useState } from 'react';

interface TodoItemProps {
  todo: Todo;
  setTodoInTodos: (todo: Todo) => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TodoItem({
  todo,
  setTodoInTodos,
  onDelete
}: TodoItemProps) {
  const [isModifyMode, setIsModifyMode] = useState<boolean>(false);
  const [todoWantToModify, setTodoWantToModify] = useState<string>(todo.todo);
  async function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const checked = e.target.checked;

    const { id, todo: todoText } = todo;
    const updateTodoRequest: UpdateTodoRequest = {
      todo: todoText,
      isCompleted: checked
    };
    try {
      const response = await updateTodo(id, updateTodoRequest);
      if (response.status === 200) {
        const { id, todo: todoText, isCompleted } = response.data;
        const newTodo = { id, todo: todoText, isCompleted };
        setTodoInTodos(newTodo);
        console.log(response);
      }
    } catch (e: any) {
      const { message } = e.reponse.data;
      alert(message);
    }
  }

  function handleModifyBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsModifyMode(true);
  }

  function handleCancelBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsModifyMode(!isModifyMode);
  }

  function handleModifyInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTodoWantToModify(e.target.value);
  }

  async function handleSubmitBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const { id, isCompleted } = todo;
    const updateTodoRequest: UpdateTodoRequest = {
      todo: todoWantToModify,
      isCompleted
    };
    if (todoWantToModify === todo.todo) {
      setIsModifyMode(false);
      return;
    }
    try {
      const response = await updateTodo(id, updateTodoRequest);
      if (response.status === 200) {
        const { id, todo: todoText, isCompleted } = response.data;
        const newTodo = { id, todo: todoText, isCompleted };
        setTodoInTodos(newTodo);
      }
    } catch (e: unknown) {
      alert('수정 실패 다시 시도 해 주세요');
      return;
    }
    setIsModifyMode(false);
  }

  return (
    <li>
      <div className='flex items-center space-x-1'>
        <label>
          <input
            type='checkbox'
            checked={todo.isCompleted}
            onChange={handleCheckboxClick}
          />
        </label>
        {isModifyMode ? (
          <div className='space-x-2'>
            <input
              value={todoWantToModify}
              className='border border-blue-500'
              onChange={handleModifyInputChange}
            />
            <button
              data-testid='submit-button'
              className='text-xs border border-black hover:bg-black hover:text-white'
              onClick={handleSubmitBtnClick}
            >
              제출
            </button>
            <button
              data-testid='cancel-button'
              className='text-xs border border-black hover:bg-black hover:text-white'
              onClick={handleCancelBtnClick}
            >
              취소
            </button>
          </div>
        ) : (
          <div className='flex items-center space-x-2'>
            <p>{todo.todo}</p>
            <button
              data-testid='modify-button'
              className='text-xs border border-black hover:bg-black hover:text-white'
              onClick={handleModifyBtnClick}
            >
              수정
            </button>
            <button
              data-testid='delete-button'
              className='text-xs border border-black hover:bg-black hover:text-white'
              onClick={onDelete}
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
