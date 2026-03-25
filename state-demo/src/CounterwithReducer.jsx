import { useReducer } from "react"

const initialState = 0
const reducer = (state, action) =>{
    // return new state
    switch(action){
    case"increment": return state +1
    case"Decrement": return state - 1
    case "reset" : return initialState
    default: return state
    }

}

export const CounterWithReducer = ()=>{
    const [count, dispatch ] = useReducer(reducer, initialState)
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=> dispatch("increment")}>increment</button>
            <button onClick={()=> dispatch("Decrement")}>Decrement</button>
            <button onClick={()=> dispatch("reset")}>Reset</button>
        </div>
    )
}