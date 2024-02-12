import { createSlice } from '@reduxjs/toolkit'

const initialState = 'hello world'

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      notificationChange(state, action) {
        return action.payload
      },
      clearNotification(state, action) {
        return ''
      }
    }
})

export const { notificationChange, clearNotification } = notificationSlice.actions

export const setNotification = (content, timeout) => {
  return dispatch => {
    dispatch(notificationChange(content))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout)
  }
}
export default notificationSlice.reducer