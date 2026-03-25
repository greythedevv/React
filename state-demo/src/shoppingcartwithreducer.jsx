import { useReducer } from "react";

const initialState = {
    item: [],
    totalAmount: 0,
    totalItem: 0
}

const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_ITEM":{
            const existingItemIndex =state.items.findIndex(
                item => item.id === action.payload.id
            )
        }
    }

}
export const ShoppingCartWithReducer =()=>{
  const[state, dispatch]=useReducer(reducer, initialState)

const product= [
    {id:1, name: "React Course", price: 49.99},
    {id:2, name: "Node.js course", price: 39.99},
    {id:3, name: "JavaScript Bundle", price: 89.99}
]
    return(
        <div>
            <h2>Products</h2>
            {
                product.map((product) =>{
                    <div key={product.id}>
                        <h3>
                            {product.name} - ${product.price}
                        </h3>
                        <button>Add to Cart</button>
                    </div>
                })
            }
        </div>
    )
}