import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Display from './components/Display'

function App() {
  const [value, setValue] = useState(0)

  const handleAdd5 = () => {
    setValue(value + 5)
  }

  const handleAdd10 = () => {
    setValue(value + 10)
  }

  const handleSubtract15 = () => {
    setValue(value - 10)
  }

  const handleReset = () => {
    setValue(0)
  }

  return (
    <>
      <Display display={value} />
      <Buttons
        onAdd5={handleAdd5}
        onAdd10={handleAdd10}
        onSubtract15={handleSubtract15}
        onReset={handleReset}
      />
    </>
  )
}

export default App