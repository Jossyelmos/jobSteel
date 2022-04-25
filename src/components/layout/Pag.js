import React, { Fragment } from 'react';
import {GoPrimitiveDot} from 'react-icons/go';

const Pag = () => {

    return (
        <div className="text-dark text-center">
            {[...Array(5)].map((item) => { 
                const pagValue = [...Array(5)].slice(0, 3);     
                return (
                    <Fragment>
                        {pagValue ? (
                            <GoPrimitiveDot className='text-primary' />        
                            ) : (
                            <GoPrimitiveDot className='text-dark' />
                        )}         
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Pag;