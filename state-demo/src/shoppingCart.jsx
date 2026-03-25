import { useState } from "react"


export const ShoppingCart = ()=>{
    const [cartItem, setCartItem] = useState({
        reactCourse: 0,
        vueCourse: 0
    })
    const Prices = {
        reactCourse: 49.99,
        vueCourse: 39.99
    }

    const handleAddReactCourse =() =>{
        if(cartItem.reactCourse<5){
            setCartItem({
            ...cartItem,
            reactCourse: cartItem.reactCourse+1
        })
        }
        
    }

    const handleAddVueCourse =() =>{
        if (cartItem.vueCourse<5){
            setCartItem({
            ...cartItem,
            vueCourse: cartItem.vueCourse+1
        })
        }
        
    }

    const clearCart=()=>{
        setCartItem(
            {reactCourse : 0,
            vueCourse : 0}
        )
    }
    return(
        <div>
            <h2>Shopping cart component</h2>
             <ProductCard name="React course" price={Prices.reactCourse} quantity={cartItem.reactCourse} onAddToCart={handleAddReactCourse}/>
             <ProductCard name="Vue course" price={Prices.vueCourse} quantity={cartItem.vueCourse} onAddToCart={handleAddVueCourse}/>
            <CartSummary cartItem={cartItem} prices={Prices} clearCart={clearCart}/>
           
        </div>
    )
    
}

export const ProductCard = ({name, price, quantity, onAddToCart})=>{

return(
    <div>
        <h3>{name}</h3>
        <p>${price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={onAddToCart}>Add to cart</button>
    </div>
)

}

export const CartSummary = ({cartItem, prices, clearCart})=>{
    const totalItems = cartItem.reactCourse+cartItem.vueCourse
    const totalPrice = cartItem.reactCourse * prices.reactCourse+ cartItem.vueCourse * prices.vueCourse
    return(
        <div>
            <h3>Cart summary</h3>
            <p>Total items: {totalItems}</p>
            <p>Total price: ${totalPrice.toFixed(2)}</p>
            <button onClick={clearCart}>Clear cart</button>
        </div>
        
    )
    
}