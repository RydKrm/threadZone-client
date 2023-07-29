import { createContext, useEffect, useReducer } from "react";
import shopData from '../../public/data/shopData.json';


const ShopContext = createContext();

const initialState = {
    shopList:[],
    sortBy : null,
    ratting : null,
}

const shopReducer = (state,action)=>{
    switch(action.type){
        case 'SET_SHOP' :
            return {...state,shopList : action.payload};
        case 'SORT_BY' :
            return {...state,sortBy : action.payload};
        case 'RATTING_BY':
            return {...state,ratting : action.payload}     
    }
}

const ShopProvider = ({children})=>{
    
    const [state,dispatch] = useReducer(shopReducer,initialState);

    useEffect(()=>{
        dispatch({type:'SET_SHOP',payload:shopData})
    },[]);

    return(
        <ShopContext.Provider value={{state,dispatch}}>
         {children}
        </ShopContext.Provider>
    )

}

export { ShopProvider, ShopContext };