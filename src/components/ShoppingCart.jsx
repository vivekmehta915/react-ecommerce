import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, editProduct } from '../reducers';

const ShoppingCart = () => {
    const cart = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(deleteProduct(productId));
    };

    const handleUpdateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            handleRemoveFromCart(productId);
        } else {
            dispatch(editProduct({ id: productId, quantity }));
        }
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart">
            {cart.length > 0 ? (
                cart.map(product => (
                    <div key={product.id} className="cart-item">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <div>
                            <button onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}>-</button>
                            <input type="number" value={product.quantity} readOnly />
                            <button onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}>+</button>
                        </div>
                        <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                    </div>
                ))
            ) : (
                <p className="empty-cart">Your cart is empty.</p>
            )}
            {cart.length > 0 && <h2>Total: {totalPrice}</h2>}
        </div>
    );
};

export default ShoppingCart;
