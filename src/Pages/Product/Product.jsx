import React from 'react';

const Product = () => {
    return (
        // <div className='grid grid-cols-3 gap-2 '>
        //     <h2 className=' text-xl bg-darkBlue text-lightWhite '> Product Page </h2>
        //     <h2 className="font-xl text-neutral-100 bg-cDark"> 1 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cLightWhite'> 2 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cDarkBlue'> 3 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cLightBlue'> 4 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cLightDarkBlue'> 5 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cLightLightBlue'> 6 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cBlueGreen'> 7 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cLightBlueGreen'> 8 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cPurple'> 9 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cViolate'> 10 width will be taken from full width </h2>
        //     <h2 className=' text-xl text-lightWhite bg-cPink'> 11 width will be taken from full width </h2>

        // </div>

        <div className="w-full mx-auto px-4 grid lg:grid-cols-4 gap-4 pt-4 items-start relative">
            {/* SideBar Start here  */}
            <div className="col-span-1 px-4 pb-6 pt-4 shadow-sm rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block ">
                <div className="divide-7 space-y-5 relative">
                   {/* Category start  */}
                    <div className="relative">
                      <div className="lg:hidden text-gray-300 bg-gray-800 hover:text-cDarkBlue text-lg absolute right-0 top-0 cursor-pointer">
                        <h3 className="text-xl text-cDark mb-3 uppercase font-medium">Category</h3>
                        {/* Category Item Start here  */}
                        <div className="space-y-2">
                           <div className="flex items-center">
                             <input type="checkbox" className='text-primary focus:right-0 rounded-sm cursor-pointer'/>
                             <label htmlFor="Bed Room" className='text-gray-600 ml-3 cursor-pointer '>Bed Room</label>
                             <div className="ml-auto text-gray-600 text-sm">(15)</div>
                            </div> 
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;