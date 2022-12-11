import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [],
}

export const actionTodos = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [action.payload, ...state.todoList]
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      )
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (action.payload === todo.id) {
          return { ...todo, completed: !todo.completed }
        }

        return todo
      })
    },
    clearTodo: (state) => {
      state.todoList = state.todoList.filter((todo) => todo.completed !== true)
    },
  },
})

export const { addTodo, deleteTodo, editTodo, clearTodo } = actionTodos.actions
export default actionTodos.reducer
