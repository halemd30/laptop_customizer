import React from 'react';
import CartSummary from '../CartSummary/CartSummary'

function Cart(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <CartSummary 
                usCurrencyFormat={props.usCurrencyFormat}
                selected={props.selected}
            />
        </section>
    )
}

export default Cart;