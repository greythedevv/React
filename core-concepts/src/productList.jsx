export const ProductList = ()=>{
const product = [{
    id:1,
    name: "Laptop",
    Price: 999
}, {
    id: 2,
    name: "Phone",
    Price: 699
}, {
    id: 3,
    name: "Tablet",
    Price: 499
}]

    return <div>
        <h2>Our Products</h2>
        {
            product.map((product)=>{
                return(
                    <div>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.Price}</p>
                        
                    </div>
                )
            })
        }
    </div>
}