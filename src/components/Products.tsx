type ProductProps = {
    name: string,
    price: number,
}

function Product({name, price}: ProductProps) {
 return (
    <div>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
    </div>
 )
}

export default Product;