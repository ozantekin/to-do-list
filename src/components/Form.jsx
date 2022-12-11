import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from '../redux/actions/actionTodos'
import { useDispatch } from 'react-redux'
import { MdPlaylistAdd } from 'react-icons/md'

export default function Form() {
  const [newTodo, setNewTodo] = useState('')

  const dispatch = useDispatch()

  const changeInput = (e) => {
    setNewTodo(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault()
    dispatch(
      addTodo({
        id: uuidv4(),
        todo: newTodo,
        completed: false,
        edit: false,
      })
    )
    setNewTodo('')
  }

  return (
    <form onSubmit={submitHandle}>
      <div className=' flex justify-between items-center   dark:border-[#74808D] dark:bg-[#273340] border rounded '>
        <input
          type='text'
          placeholder='Add new to do list item'
          value={newTodo}
          onChange={changeInput}
          className='bg-transparent outline-0 p-2 w-full	 dark:text-white '
        />
        <button
          onClick={submitHandle}
          className='  py-1 mr-1 px-2 rounded-full text-blue-600 dark:text-[#6C4DE6]   text-3xl'
        >
          <MdPlaylistAdd />
        </button>
      </div>
    </form>
  )
}
