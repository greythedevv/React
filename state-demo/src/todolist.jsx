
import { useState } from "react"

export const TodoList = () =>{
    const [items, setItems] = useState([{id:1, text: "Learn React"},
        {id:2, text: "Bild an app"}
    ])

    console.log("Rendering with items:", items)
const addItem = () =>{
    const newItem= {
        id: Date.now(),
        text: "Deploy to production"
    }
    setItems([...items, newItem])
}

    return(
        <div>
            <ul>
            {items.map((item)=> {

                return<li key={item.id}>{item.text}</li>})}
            </ul>
            <button onClick={addItem}>add item</button>
        </div>
    )
}