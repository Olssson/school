import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import logo from './eyes.png'
import Filter from './components/filter/Filter';

const App = () => {

  const [cart, productincart] = useState([]);
  const [products, setProducts] = useState([]);
  const [codeUsed, setCodeUsed] = useState(false);
  const inputref = React.createRef();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('./products.json');
      const data = await response.json();

      setProducts(data.products);
    };
    getData();
  }, []);

  const handleAddToCart = (product) => {
    
    const newCart = [...cart]
    const itemInCart = newCart.find((item) => item.id === product.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    productincart(newCart);
  };

  const canabis = () => {
    const canabis = products.filter((product) => product.category === 'canabis');
    setProducts(canabis);
  };

  const rifle = () => {
    const rifle = products.filter((product) => product.category === 'rifle');
    setProducts(rifle);
  };

  const handletotaleprice = (cart) => {
    const total = cart.reduce((previousValue, item) => previousValue + item.price * item.quantity, 0);
    return total;
  };

  const promopricechenge = (cart) => {
    const promo = cart.reduce((previousValue, item) => previousValue + item.promoPrice * item.quantity, 0,);
    return promo;
  };

  const remove1 = (product) => {
    const newCart = [...cart];
    const itemInCart = newCart.find((item) => item.id === product.id);
    if (itemInCart.quantity > 1) {
      itemInCart.quantity--;
    } else {
      newCart.splice(newCart.indexOf(itemInCart), 1);
    }
    productincart(newCart);
  };

  const handleRemoveFromCart = (product) => {
    productincart(cart.filter((i) => i.id !== product.id));
  };

  const sort = () => {
    setProducts([...products.sort((a,b) => a.price < b.price)])
  };

  function discoountcode() {
    const code = inputref.current ? inputref.current.value : null
    
    if (code === '25%') {
      setCodeUsed(true)
    }

    if (codeUsed) {
      return {"Promoprice": promopricechenge(cart) , "saveing": handletotaleprice(cart) - promopricechenge(cart)}; 
    } else {
      return 0;
    }
  }

  const serch = (e) => {
    const search = e.target.value;
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    }
    );
    setProducts(filtered);
  };
  return (
    <div className="App">
      <header>
      <h1>Shop</h1>
      <img src={logo} alt='eyes' ></img>
        <div className='Price'>
          <input type="text" placeholder="Search" onChange={serch} />
          <input ref={inputref} type="text" ></input>
            <p >price: {handletotaleprice(cart)}</p>
              <button onClick={() => discoountcode()}>Use promo code</button>  
            <p>Cena:{discoountcode().Promoprice}</p>
            <p>Oszczędzasz: {discoountcode().saveing}</p>            
        </div>
      <Filter canabis={canabis} rifle={rifle} sort={sort}/>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} remove1={remove1}/>
      </header>
      <Products products={products} handleAddToCart={handleAddToCart}  />
    </div>
  );
}
export default App;