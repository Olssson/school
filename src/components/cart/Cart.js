import './Cart.css';
import image from './cart.png';

const Cart = (props) => {

  return (
    <div className="App">
      <div className="dropdown">
        <img className='cart-image' src={image} alt="cart"/>
        <div className="dropdown-content">
        <div>{props.cart.map((cartinformation) =>{
          return <div className='full-cart' >
            <h3 className='grid-item'>nazwa:{cartinformation.name}</h3>
            <p className='grid-item'>cena za produkt:{cartinformation.price}</p>
            <p className='grid-item'>Ilość{cartinformation.quantity}</p>
            <img className='grid-item' src={cartinformation.image} width="400" height="379" alt='obraz' />
            <button onClick={() => props.handleRemoveFromCart(cartinformation)} value="Remove">Remove all items</button>
            <button onClick={() => props.remove1(cartinformation)} value="Remove">Remove 1 item</button>
            <hr></hr>
          </div>
        })}
       </div>
      </div>
      </div>
    </div>
    
  );
}
export default Cart;