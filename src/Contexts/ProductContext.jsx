import productData from '../../public/data/productData.json';
import React, { createContext, useReducer, useContext, useEffect } from 'react';

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
            console.log("payload ",typeof action.payload.min)
    return {...state,minPrice:action.payload.min,maxPrice:action.payload.max};
    case 'SIZE_BY':
        return {...state,size : action.payload}  ;
    case 'FILTER_BY_COLOR' :
       return {...state, color:action.payload}  ;
    case 'FILTER_BY_CATEGORY' :
        return {...state,category : action.payload}     
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
  // const fetchedProducts = productData;
   //console.log("check data ",productData);
    dispatch({ type: 'SET_PRODUCTS', payload: productData});
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

//const useProductContext = () => useContext(ProductContext);

export { ProductProvider, ProductContext };
