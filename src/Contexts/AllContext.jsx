import React, { createContext, useReducer} from 'react'; 

const AllContext = createContext();

const initialState = {
  data: [], 
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
    //  console.log("shop rating ->  ",action.payload)
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

const AllProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AllContext.Provider value={{ state, dispatch }}>
      {children}
    </AllContext.Provider>
  );
};

export { AllProvider, AllContext};
