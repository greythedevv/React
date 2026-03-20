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

const productElement =  product.map((product)=>{
                return(
                    <div key={product.id} >
                        <h3>{product.name}</h3>
                        <p>Price: ${product.Price}</p>

                    </div>
                )
            })

    return <div >
        <h2>Our Products</h2>
        {productElement}
    </div>
}