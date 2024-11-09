import { useCounter } from "./store"
import SomeComponent from "./Components/SomeComponent"
const App = () => {
// const count = useCounter(state=> state.count)
const {count,increment,decrement} = useCounter();
  return (
    <>
    <h1>Count is : {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <SomeComponent />
    </>
  )
}

export default App