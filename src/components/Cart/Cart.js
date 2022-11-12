import { useContext } from 'react';
import CartContext from '../store/cart-context';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';

import CartItem from './CartItem';

const Cart = props => {
	const cartCtx = useContext(CartContext);

	console.log(`cartCtx: `, cartCtx);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = id => {};

	const cartItemAddHandler = item => {};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map(item => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}>
					{item.name}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					oNAdd={cartItemAddHandler.bind(null, item)}
				</CartItem>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div>
				<span className={classes.total}>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
