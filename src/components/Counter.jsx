import { useState } from "react";
import DecreaseBtn from "./DecreaseBtn";
import IncreaseBtn from "./IncreaseBtn";


function Counter() {

    const [counter, setCounter] = useState(4)

    const handleDecrease = () => {
        if(counter > 0) setCounter( c => c - 1 );
    }

    const handleIncrease = () => {
        setCounter(c => c + 1);
    }

  return (
    <section className="counter">
        <DecreaseBtn handleClick={ handleDecrease }/>
        <p>{ counter }</p>
        <IncreaseBtn handleClick={ handleIncrease }/>
    </section>
  )
}

export default Counter;