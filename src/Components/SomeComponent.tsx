import { useCounter } from '../store'

const SomeComponent = () => {
    const inc = useCounter((state) => state.increment);
    const dec = useCounter((state) => state.decrement);
  return (
    <div>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default SomeComponent