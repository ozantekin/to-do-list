import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodo } from '../redux/actions/actionTodos'

export default function Footer() {
  const [todoLength, setTodoLenght] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [completed, setCompleted] = useState(0)

  const todoList = useSelector((state) => state.actionTodos.todoList)

  const dispatch = useDispatch()

  const clearHandle = () => {
    dispatch(clearTodo())
  }

  useEffect(() => {
    const check = todoList.filter((todo) => todo.completed === true).length
    const percentage = Math.floor((check / todoLength) * 100) + '%'
    const completed = Math.floor((check / todoLength) * 100) >= 100

    setTodoLenght(todoList.length)
    setCompleted(completed)
    setPercentage(percentage)
  })

  return (
    <div className='flex justify-between items-center font-bold tracking-wide	'>
      <span>
        {' '}
        {todoLength === 0
          ? 'No additions yet'
          : `${todoLength} Total to do`}{' '}
      </span>
      <span>
        <div className='flex w-32 justify-center items-center text-center'>
          <div className='w-full  bg-gray-300 dark:bg-[#74808D] rounded-full h-1.5 md:h-2  '>
            <div
              className='bg-blue-600 dark:bg-[#6C4DE6] h-1.5 w-4 md:h-2  rounded-full'
              style={{
                width: `${completed ? '100%' : percentage}`,
              }}
            />
          </div>
          {completed && <span className='pl-2'> 🎉 </span>}
        </div>
      </span>
      <button onClick={clearHandle}> Clear </button>
    </div>
  )
}
