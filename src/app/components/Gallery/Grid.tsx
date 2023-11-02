import React, { FC } from 'react';

const Grid: FC = ({ children }) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:p-4 m-2'>
            {children}
        </div>
    );
};

export default Grid;
