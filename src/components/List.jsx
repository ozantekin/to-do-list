import { useDispatch, useSelector } from 'react-redux'
import {
  MdOutlineDoneAll,
  MdOutlineDeleteForever,
  MdCached,
} from 'react-icons/md'
import { deleteTodo, editTodo } from '../redux/actions/actionTodos'

export default function List() {
  const todoList = useSelector((state) => state.actionTodos.todoList)

  const dispatch = useDispatch()

  const deleteHandle = (id) => {
    dispatch(deleteTodo(id))
  }

  const editHandle = (id) => {
    dispatch(editTodo(id))
  }

  return (
    <div className=' p-2  '>
      <ul className='   dark:text-white		'>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className='w-full mb-2 flex justify-between break-words items-center relative border-b dark:border-b-[#74808D]'
          >
            {todo.completed ? (
              <button
                onClick={() => editHandle(todo.id)}
                className='text-2xl  transition-all text-amber-500 dark:text-ambared-300 hover:text-amber-600 hover:dark:text-amber-400'
              >
                <MdCached />
              </button>
            ) : (
              <button
                onClick={() => editHandle(todo.id)}
                className='text-2xl  transition-all text-emerald-500 dark:text-emerald-300 hover:text-emerald-600 hover:dark:text-emerald-400'
              >
                <MdOutlineDoneAll />
              </button>
            )}
            <span
              className={`w-5/6 break-words cursor-default p-2 relative transition-all   ${
                todo.completed
                  ? 'line-through	decoration-blue-600 dark:decoration-[#6C4DE6] opacity-60		decoration-wavy	decoration-4	'
                  : 'hover:text-blue-600 hover:dark:text-[#6C4DE6]'
              }`}
            >
              {' '}
              {todo.todo}{' '}
            </span>{' '}
            <div>
              <button
                onClick={() => deleteHandle(todo.id)}
                className='text-2xl  transition-all text-rose-500 dark:text-rose-300  hover:text-rose-600 hover:dark:text-rose-400'
              >
                {' '}
                <MdOutlineDeleteForever />{' '}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
