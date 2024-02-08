import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
    const handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      event.preventDefault()
      const filter = event.target.value
      dispatch(filterChange({filter: filter}))
    }

    const style = {
      marginBottom: 10
    }

    const dispatch = useDispatch()
  
    return (
      <div style={style}>
        filter <input
        name="filter"
        onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter