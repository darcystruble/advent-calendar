import { useState } from 'react'
import Main from './components/Main'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background'>
      <Main />
    </div>
  )
}

export default App
