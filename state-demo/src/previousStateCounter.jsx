import { useState } from "react"

export const PreviousStateCounter = ()=>{
 const [count, setCount] = useState(0)
 console.log("Render phase: component rendering with count=", count)

 const handleClick =()=>{
    setCount((prev) => prev+1)
    console.log("After setCount((prev) => prev+1), count is:", count)
    setCount((prev) => prev+5)
    console.log("After setCount((prev) => prev+5), count is:", count)
    setCount((prev) => prev+10)
    console.log("After setCount((prev) => prev+10), count is:", count)
 }
  return (
<>
<h2>counter</h2>
<button onClick={handleClick}>incease {count}</button>
</>
  )
}