import { useSelector, useDispatch } from 'react-redux'
import { setName } from '../redux/slice'

export const User = () => {
  const name = useSelector(state => state.user.name)
  const dispatch = useDispatch()

  const handleSetName = () => {
    const newName = prompt('Enter new name: ')
    dispatch(setName(newName))
  }
  return (
    <div>
      <h2 className='text-xl'>User: {name}</h2>
      <div>
        <button className='bg-gray-600 hover:bg-gray-500 rounded-md p-2' onClick={handleSetName}>Set Name</button>
      </div>
    </div>
  )
}
