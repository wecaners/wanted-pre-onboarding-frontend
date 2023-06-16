import { useEffect, useState } from 'react';
import { CreateTodoRequest, createTodo } from '../../apis/api/todos/createTodo';
import { Todo } from '../../types/Todo';
import TodoList from './TodoList';
import { getTodo } from '../../apis/api/todos/getTodo';

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState<string>('');

  async function handleTodoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  async function handleAddClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const createTodoRequest: CreateTodoRequest = {
      todo: todoInput
    };
    try {
      const response = await createTodo(createTodoRequest);
      if (response.status === 201) {
        const { id, todo, isCompleted } = response.data;
        const newTodo: Todo = { id, todo, isCompleted };
        setTodos([...todos, newTodo]);
        setTodoInput('');
      }
    } catch (e: unknown) {
      alert('Todo생성에 실패했습니다.');
    }
  }

  useEffect(() => {
    async function fetchTodo() {
      try {
        const response = await getTodo();
        if (response.status === 200) {
          const newTodos = response.data.map(
            ({ id, todo, isCompleted }: Todo) => ({
              id,
              todo,
              isCompleted
            })
          );
          setTodos(newTodos);
        }
      } catch (e: any) {
        if (e.code !== 'No_DATA') {
          alert('Todo를 읽어올 수 없습니다.');
        }
      }
    }
    fetchTodo();
  }, []);

  return (
    <article className='space-y-4'>
      <div className='flex items-center space-x-2'>
        <h1 className='text-2xl font-semibold'>TODO</h1>

        <label>
          <input
            data-testid='new-todo-input'
            className='border border-blue-500 rounded-2xl indent-2 placeholder:text-sm'
            placeholder='할일을 입력 해 주세요'
            value={todoInput}
            onChange={handleTodoChange}
          />
        </label>
        <button
          data-testid='new-todo-add-button'
          className='p-1 text-xs text-white bg-blue-500 rounded-2xl '
          onClick={handleAddClick}
        >
          추가
        </button>
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </article>
  );
}
