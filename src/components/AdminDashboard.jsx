import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { addProduct, deleteProduct, editProduct, fetchProducts } from '../reducers';

const AdminDashboard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const categories = ['Electronics', 'Clothing', 'Home'];

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            name: '',
            category: '',
            price: '',
            image: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            category: Yup.string().required('Required'),
            price: Yup.number().required('Required'),
            image: Yup.string().required('Required')
        }),
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {
            if (isEditing) {
                dispatch(editProduct({ ...values, id: editingProduct.id }));
                setIsEditing(false);
                setEditingProduct(null);
            } else {
                dispatch(addProduct(values));
            }
            resetForm();
        }
    });

    const handleEdit = (product) => {
        setIsEditing(true);
        setEditingProduct(product);
        formik.setValues(product);
    };

    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId));
    };

    return (
        <div className="admin-dashboard">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                </div>
                <div>
                    <label>Category</label>
                    <select
                        name="category"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                    >
                        <option value="">Select Category</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    {formik.touched.category && formik.errors.category ? (
                        <div>{formik.errors.category}</div>
                    ) : null}
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div>{formik.errors.price}</div>
                    ) : null}
                </div>
                <div>
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="image"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                    />
                    {formik.touched.image && formik.errors.image ? (
                        <div>{formik.errors.image}</div>
                    ) : null}
                </div>
                <button type="submit">{isEditing ? 'Update' : 'Add'} Product</button>
            </form>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <h3>{product.name}</h3>
                        <p>{product.category}</p>
                        <p>{product.price}</p>
                        <img src={product.image} alt={product.name} />
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
