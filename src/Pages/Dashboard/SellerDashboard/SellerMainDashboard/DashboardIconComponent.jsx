import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBoxOpen} from '@fortawesome/free-solid-svg-icons';

const DashboardIconComponent = (props) => {
    const icon = props.icon;
    console.log("icon name ", icon);
    return (
        <div className="h-32 w-52 border border-gray-200 rounded-lg shadow-lg flex flex-row">
              <FontAwesomeIcon className='text-blue-500 bg-blue-100 w-7 h-7 mt-5 ms-5 p-5 rounded-full' icon={icon} />
              <div className="flex flex-col mt-7 ms-4">
                <h2 className="text-xl font-black font-poppins">{props.number}</h2>
                <p className="text-sm font-light font-poppins">{props.text}</p>
              </div>
            </div>
    );
};

export default DashboardIconComponent;