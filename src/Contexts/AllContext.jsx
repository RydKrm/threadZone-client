import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const AllContext = createContext();

const initialState = {
  data: [],
  sortBy: null,
  rating: null,
  minPrice: null,
  maxPrice: null,
  size: null,
  color: null,
  category: null
};


const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DEFAULT':
      return {...state,state:initialState};
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'FILTER_BY_RATING':
      return { ...state, rating: action.payload };
    case 'FILTER_BY_PRICE':
      return { ...state, minPrice: action.payload.min, maxPrice: action.payload.max };
    case 'SIZE_BY':


        return {...state,size : action.payload}  ;
    case 'FILTER_BY_COLOR' :
       return {...state, color:action.payload}  ;
    case 'FILTER_BY_CATEGORY' :
      console.log("cat - ",action.payload)
        return {...state,category : action.payload}     

    default:
      return state;
  }
};

const AllProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);


  useEffect(() => {
    axios.get('https://thread-zone-server.vercel.app/getAllProduct')
      .then((res) => {
        dispatch({ type: 'SET_PRODUCTS', payload: res.data });
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);


  return (
    <AllContext.Provider value={{ state, dispatch }}>
      {children}
    </AllContext.Provider>
  );
};

export { AllProvider, AllContext };
