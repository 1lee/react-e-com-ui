import React from 'react'

const CartContext = React.createContext({
    items: [],
    totalAmoumt: 0,
    addItem: (item) => { },
    removeItem: (id) => {}
})

export default CartContext;