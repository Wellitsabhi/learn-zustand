import { useState } from 'react'
import RecipeApp from './components/RecipeApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeApp />
      </>
  )
}

export default App
