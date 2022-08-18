import React from 'react';

const SingleSqure = ({className, state, onClick}) => {
   
    return (
        <div onClick={onClick} className={className ? `${className} 'font-bold, text-2xl text-teal-500 p-8 h-24 w-24  box-border'` : 'font-bold, text-2xl text-teal-500 p-8  box-border h-24 w-24'}>
            <span className='font-bold'>{state}</span>
        </div>
    );
};

export default SingleSqure;