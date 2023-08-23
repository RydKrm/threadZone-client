import axios from 'axios';
import React, { createContext, useReducer, useEffect, useState } from 'react';

const ProductContext = createContext();

const initialState = {
  sortBy: null,
  filterByRating: null,
  minPrice: null,
  maxPrice: null,
  size: null,
  color: null,
  category: null,
  page: 1,
};

const productReducer = (state, action) => {
  switch (action.type) {
    // case 'SET_PRODUCTS':
    //   return { ...state, products: action.payload };
    case 'SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'FILTER_BY_RATING':
      return { ...state, filterByRating: action.payload };
    case 'FILTER_BY_PRICE':
      return { ...state, minPrice: action.payload.min, maxPrice: action.payload.max };
    case 'SIZE_BY':
      return { ...state, size: action.payload };
    case 'FILTER_BY_COLOR':
      console.log("test ", action.payload)
      return { ...state, color: action.payload };
    case 'FILTER_BY_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_PAGE':
      console.log("set page ", action.payload)
      return { ...state, page: action.payload };
    case 'SET_TOTAL_PRODUCT':
      return { ...state, totalProduct: action.payload };
    case 'DEFAULT':
      return {
        ...state,
        sortBy: null,
        filterByRating: null,
        minPrice: null,
        maxPrice: null,
        size: null,
        color: null,
        category: null
      }
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [totalProduct, setTotalProduct] = useState(1);

  useEffect(() => {
    axios.post('https://thread-zone-server.vercel.app/getProducts', state)
      .then((res) => {
        // dispatch({ type: 'SET_TOTAL_PRODUCT', payload: res.data.totalProduct});
        setTotalProduct(res.data.totalProduct);
        setProduct(res.data.productArray);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, [state]);

  return (
    <ProductContext.Provider value={{ state, dispatch, product, totalProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

//const useProductContext = () => useContext(ProductContext);

export { ProductProvider, ProductContext };
