import React from 'react';

const TemplateDescription = ({details}) => {
    return (
        <div >
            <p className='text-md font-poppins mx-3 md:mx-20 my-3 md:my-6' 
            dangerouslySetInnerHTML={{ __html: details }} />
            
        </div>
    );
};

export default TemplateDescription;