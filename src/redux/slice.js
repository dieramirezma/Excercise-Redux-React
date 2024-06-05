import { createSlice } from '@reduxjs/toolkit'

// Create a slice to the counter state
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})

// Create a slice to the user state
const userSlice = createSlice({
  name: 'user',
  initialState: { name: '' },
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload }
    }
  }
})

// Export slices actions
export const { increment, decrement } = counterSlice.actions
export const { setName } = userSlice.actions

// Export reducers
export const counterReducer = counterSlice.reducer
export const userReducer = userSlice.reducer
