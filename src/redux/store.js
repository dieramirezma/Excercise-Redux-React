import { configureStore } from '@reduxjs/toolkit'
import { counterReducer, userReducer } from './slice'

// Create store using Redux Toolkit
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})

export default store
