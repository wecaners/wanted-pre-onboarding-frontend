import { deleteTodo } from '../../apis/api/todos/deleteTodo';
import { Todo } from '../../types/Todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: TodoListProps) {
  function setTodoInTodos(newTodo: Todo) {
    const newTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  async function handleDelete(
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) {
    e.preventDefault();
    try {
      const response = await deleteTodo(id);
      if (response.status === 204) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      }
    } catch (e: unknown) {
      alert('삭제실패');
    }
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodoInTodos={setTodoInTodos}
          onDelete={(e) => handleDelete(e, todo.id)}
        />
      ))}
    </ul>
  );
}
