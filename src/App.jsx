import './App.css'
import { Counter } from './components/Counter'
import { User } from './components/User'

function App () {
  return (
    <>
      <h1 className='text-3xl'>Redux</h1>
      <Counter />
      <User />
    </>
  )
}

export default App
