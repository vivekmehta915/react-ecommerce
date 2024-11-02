import React from 'react';

const ProductFilter = ({ categories, onFilterChange }) => {
    return (
        <div className="product-filter">
            <button onClick={() => onFilterChange('All')}>All</button>
            {categories.map(category => (
                <button key={category} onClick={() => onFilterChange(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ProductFilter;
