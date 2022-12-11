import { configureStore } from '@reduxjs/toolkit'

import actionTodos from '../actions/actionTodos'

const store = configureStore({
  reducer: {
    actionTodos,
  },
})

export default store
