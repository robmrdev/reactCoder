import { useState } from "react"

const ItemCount = () => {
    const [counter, setCounter] = useState (1);

    const increase = () => {
        if (counter < 10) {
            setCounter (counter + 1);
        }
    }
    const decrece = () => {
        if (counter > 1) {
            setCounter (counter - 1);
        }
    }

  return (
    <>
        <button onClick={decrece}> - </button>
        <p> {counter} </p>
        <button onClick={increase}> + </button>
    </>
  )
}

export default ItemCount