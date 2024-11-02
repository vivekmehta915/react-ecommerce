import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push({ ...action.payload, id: Date.now() });
        },
        editProduct: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
            }
        },
        deleteProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        },
        fetchProducts: (state) => {
            return state;
        },
    }
});

export const { addProduct, editProduct, deleteProduct, fetchProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
