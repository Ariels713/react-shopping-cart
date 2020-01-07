import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Product Context
import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
        // add the given item to the cart
        // setCart Funtion, pass in current value (cart array) and the new item.
        setCart([...cart, item])

    };
    
    // const values = {
    //     products,
    //     addItem()
    // }

	return (

        <ProductContext.Provider value={{products, addItem}}>
		<div className="App">
        <CartContext.Provider value={{cart}}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
        </CartContext.Provider>
		</div>
        </ProductContext.Provider>
	);
}

export default App;
