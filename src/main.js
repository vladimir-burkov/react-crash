import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import storesContext from './contexts/store';
import orderStore from './store/order';
import cartStore from './store/cart';
import productsStore from './store/products';

const stores = {
	order: orderStore,
	cart: cartStore,
	products: productsStore
};

ReactDom.render(
	<storesContext.Provider value={stores}>
		<App/>
	</storesContext.Provider>,
	document.querySelector('.app'),
);