import {createContext, useReducer, useEffect} from 'react'; 
import axios from 'axios';

const CategoryContext = createContext();

const initialState = {
  sortBy: null, 
  rating: null,
  minPrice:null,
  maxPrice : null, 
  size:null,
  color:null,
  category:null
};


const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'FILTER_BY_RATING':
      return { ...state, rating: action.payload };
    case 'FILTER_BY_PRICE' : 
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

const CategoryProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(() => {
   axios.get('http://localhost:5000/getAllProduct')
  .then((res) => {
  dispatch({ type: 'SET_PRODUCTS', payload: res.data});
  })
  .catch((err) => {
    console.log('Error:', err);
  });
  }, []);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext};
