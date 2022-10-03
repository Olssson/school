import './Products.css';

const Products = (props) => {
    console.log(props);
    return (
        <div className='products'>
            {props.products.map((product) => {
        return <div className='product-container'>
          <h2 className='product-name'>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <img className='product-image' src={product.image} width="400" height="379" alt='obraz' />
            <button onClick={() => props.handleAddToCart(product)} value="Add">Add to cart</button>
          <hr></hr>
        </div>
      })}
        </div>
    )
}

export default Products;