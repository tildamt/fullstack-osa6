import { createSlice } from '@reduxjs/toolkit'

const initialState = 'hello world'

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      notificationChange(state, action) {
        return action.payload
      }
    }
})

export const { notificationChange } = notificationSlice.actions
export default notificationSlice.reducer