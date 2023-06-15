import { Todo } from '../../types/Todo';

export default function TodoItem({ todos }: { todos: Todo[] }) {
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div className='flex items-center space-x-1'>
              <label>
                <input type='checkbox' />
              </label>
              <li>{item.todo}</li>
              <button className='text-xs border border-black hover:bg-black hover:text-white'>
                수정
              </button>
              <button className='text-xs border border-black hover:bg-black hover:text-white'>
                삭제
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
