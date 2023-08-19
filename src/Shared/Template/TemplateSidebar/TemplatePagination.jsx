import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../Contexts/ProductContext';

const TemplatePagination = () => {
    const {totalProduct,dispatch} = useContext(ProductContext);
    const [page,setPage] = useState(1);
    const maxPage = Math.ceil(totalProduct/9);

    const changePage = (index)=>{
         dispatch({ type: 'SET_PAGE', payload:index});
    }
    
    return (
       maxPage>1 && <div className="join">
        {
            Array.from({length:maxPage}).map((pg,index)=>
            <button key={index} className="join-item btn btn-active" 
            onClick={()=>{changePage(index+1)}}>
                {index+1}</button>
            )
        }
        
        </div>
    );
};

export default TemplatePagination;