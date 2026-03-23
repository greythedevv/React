import { useState } from "react"

export const Counter = ()=>{

    let[count, setCount] = useState(0)
    console.log("Counter component rendered")
    const handleClick = ()=>{
       setCount(count ++)
        console.log(count)
    }
    return (
        <button onClick={handleClick}>count: {count}</button>
    )
}