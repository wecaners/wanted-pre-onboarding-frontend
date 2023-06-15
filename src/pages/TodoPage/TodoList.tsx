import { Todo } from '../../types/Todo';
import TodoItem from './TodoItem';

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      <TodoItem todos={todos} />
    </ul>
  );
}
