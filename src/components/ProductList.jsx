import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct } from '../reducers';

const ProductList = ({ selectedCategory, searchQuery }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    const handleAddToCart = (product) => {
        dispatch(addProduct(product));
        toast.success(`${product.name} added to cart!`);
    };

    const filteredProducts = products.filter(product => {
        if (selectedCategory !== 'All' && product.category !== selectedCategory) {
            return false;
        }
        if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        return true;
    });

    return (
        <div className="product-grid">
            {filteredProducts.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
