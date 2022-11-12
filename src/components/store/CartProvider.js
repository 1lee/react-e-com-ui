import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		// create a variable for amount of item at x price
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		// find out if this item is in the cart already
		const existingCartItemIndex = state.items.findIndex(
			item => item.id === action.item.id
		);

		// access this item in the cart if it exists
		const existingCartItem = state.items[existingCartItemIndex];

		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				// add amount of this item to existing cart item amount
				amount: existingCartItem.amount + action.item.amount
			};

			// create a NEW array of items in the cart
			updatedItems = [...state.items];
			// Overwrite the index of this item in cart with the updated item
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			// add the updated item to the cart
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		};
	}
	return defaultCartState;
};

const CartProvider = props => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = item => {
		dispatchCartAction({ type: 'ADD', item: item });
	};

	const removeItemFromCartHandler = id => {
		dispatchCartAction({ type: 'REMOVE', id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
