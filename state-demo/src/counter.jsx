import { useState } from "react"

export const SimpleCounter = ()=>{
 const [count, setCount] = useState(0)

 const handleClick =()=>{
    setCount(count+1)
    setCount(count+5)
    setCount(count+10)
 }
  return (
<>
<h2>counter</h2>
<button onClick={handleClick}>incease {count}</button>
</>

  )


}