import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../Contexts/AllContext';
import TemplateStar from '../../Shared/Template/TemplateSidebar/TemplateStar';
import TemplatePrice from '../../Shared/Template/TemplateSidebar/TemplatePrice';
import TemplateSize from '../../Shared/Template/TemplateSidebar/TemplateSize';
import TemplateColor from '../../Shared/Template/TemplateSidebar/TemplateColor';
import ProductListTop from '../Product/ProductList/ProductListTop';
import TemplateGridView from '../../Shared/Template/TemplateList/TemplateGridView';
import TemplateListView from '../../Shared/Template/TemplateList/TemplateListView';
import TemplatePagination from '../../Shared/Template/TemplateSidebar/TemplatePagination';
import { ProductContext} from '../../Contexts/ProductContext';

const Category = ({categoryName}) => {
    const [totalProduct,setTotalProduct] = useState(null);
      const [view,setView] = useState('grid');
    const {dispatch,state,product} = useContext(ProductContext);
    const [productInfo,setProductInfo] = useState({});

    useEffect(()=>{
        dispatch({type:"FILTER_BY_CATEGORY",payload:categoryName});
        axios.get('http://localhost:5000/productInformation')
        .then(res=>{
        setProductInfo(res.data);
        })
        .catch(err=> console.log(err));
    },[])

//    useEffect(()=>{
//     console.log("testing for reload  ");
//       axios.post('http://localhost:5000/getProducts',state)
//       .then(res=>{
//          setTotalProduct(res.data.totalProduct);
//       //   dispatch({type:"SET_DATA",payload:res.data.productArray});
//       })
//       .catch(err=>console.log(err));
//     },[state])

        return ( 

        <div className="w-full mx-auto px-4 grid lg:grid-cols-4 gap-4 pt-4 items-start relative pb-4"> 
         {/* SideBar Start here  */}
            {/* <div className="col-span-1 font-poppins pb-6 shadow-lg rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block px-5 py-5 "> */}
             {/* <div className=" divide-y space-y-5 relative"> */}
             {/* {productInfo.ratingList &&  <TemplateStar  starType={productInfo.ratingList} />} */}
               {/* <TemplateSize /> */}
              {/* <TemplatePrice /> */}
            {/* { productInfo.colorList &&  <TemplateColor   allColor={productInfo.colorList}/> } */}
             {/* </div> */}
            {/* </div> */}
            {/* //  Product List Start here */}
            <div className="col-span-4 flex flex-col">
                <ProductListTop view={view} setView={setView}/>
               {view==='grid' &&  <TemplateGridView productList={product}/> } 
              { view ==='list' && <TemplateListView productList={product} /> }
             <div className='mt-5 mx-auto'>
              {/* <CategoryPagination totalProduct={totalProduct}/> */}
              <TemplatePagination />
             </div>
            </div>
            
        </div>
    );
};

export default Category;