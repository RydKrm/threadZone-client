import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import TemplateCategory from '../../Shared/Template/TemplateSidebar/TemplateCategory';
import TemplateStar from '../../Shared/Template/TemplateSidebar/TemplateStar';
import TemplatePrice from '../../Shared/Template/TemplateSidebar/TemplatePrice';
import TemplateSize from '../../Shared/Template/TemplateSidebar/TemplateSize';
import TemplateColor from '../../Shared/Template/TemplateSidebar/TemplateColor';
import ProductListTop from './ProductList/ProductListTop';
import { ProductContext } from '../../Contexts/ProductContext';
import TemplateGridView from '../../Shared/Template/TemplateList/TemplateGridView';
import TemplateListView from '../../Shared/Template/TemplateList/TemplateListView';
import axios from 'axios';
import TemplatePagination from '../../Shared/Template/TemplateSidebar/TemplatePagination';

const Product = () => {
  const { state, dispatch, product } = useContext(ProductContext);
  const [view, setView] = useState('grid');
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    axios.get('https://thread-zone-server.vercel.app/productInformation')
      .then(res => {
        setProductInfo(res.data);
        // console.log("product information ",res.data.colorList);
      })
      .catch(err => console.log(err));
  }, [])

  return (

    <div className="w-full mx-auto px-4 grid lg:grid-cols-4 gap-4 pt-4 items-start relative pb-4">
      {/* SideBar Start here  */}
      <div className="col-span-1 font-poppins pb-6 shadow-lg rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block px-5 py-5 ">
        <div className=" divide-y space-y-5 relative">
          {productInfo.ratingList && <TemplateStar starType={productInfo.ratingList} />}
          <TemplateSize />
          <TemplatePrice />
          {productInfo.colorList && <TemplateColor allColor={productInfo.colorList} />}
          {productInfo.categoryList && <TemplateCategory allCategory={productInfo.categoryList} />}
        </div>
      </div>
      {/* //  Product List Start here */}
      <div className="col-span-3 flex flex-col">
        <ProductListTop view={view} setView={setView} />
        {view === 'grid' && <TemplateGridView productList={product} />}
        {view === 'list' && <TemplateListView productList={product} />}
        <div className='mt-5 mx-auto'>
          <TemplatePagination />
        </div>
      </div>


    </div>
  );
};

export default Product;