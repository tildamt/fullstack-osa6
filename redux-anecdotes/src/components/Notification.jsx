import { useDispatch, useSelector } from 'react-redux'
import { notificationChange } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const dispatch = useDispatch()

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification