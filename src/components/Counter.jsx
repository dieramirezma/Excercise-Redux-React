import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slice'

export const Counter = () => {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className='text-xl'>Counter: {count}</h2>
      <div className='flex justify-center gap-5'>
        <div>
          <button className='bg-gray-600 hover:bg-gray-500 rounded-md p-2' onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <div>
          <button className='bg-gray-600 hover:bg-gray-500 rounded-md p-2' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  )
}
