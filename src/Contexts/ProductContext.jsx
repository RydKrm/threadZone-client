import axios from 'axios';
import React, { createContext, useReducer,useEffect,useState } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [], 
  sortBy: null, 
  filterByRating: null,
  minPrice:null,
  maxPrice : null, 
  size:null,
  color:null,
  category:null
};


const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'FILTER_BY_RATING':
      return { ...state, filterByRating: action.payload };
    case 'FILTER_BY_PRICE' : 
    return {...state,minPrice:action.payload.min,maxPrice:action.payload.max};
    case 'SIZE_BY':
        return {...state,size : action.payload}  ;
    case 'FILTER_BY_COLOR' :
       return {...state, color:action.payload}  ;
    case 'FILTER_BY_CATEGORY' :
        return {...state,category : action.payload};
    case 'DEFAULT' :
      return {...state,
        sortBy: null, 
        filterByRating: null,
        minPrice:null,
        maxPrice : null, 
        size:null,
        color:null,
        category:null}     
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
  // const fetchedProducts = productData;
   //console.log("check data ",productData);

   axios.get('http://localhost:5000/getAllProduct')
  .then((res) => {
   // console.log('Response Data:', res.data);
  dispatch({ type: 'SET_PRODUCTS', payload: res.data});
  })
  .catch((err) => {
    console.log('Error:', err);
  });

  

    
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

//const useProductContext = () => useContext(ProductContext);

export { ProductProvider, ProductContext };
