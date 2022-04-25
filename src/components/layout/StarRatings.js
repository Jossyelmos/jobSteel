import React from 'react';
import {BsStarFill} from 'react-icons/bs';

const StarRatings = () => {

    return (
        <div className="text-bright">
            {[...Array(5)].map((star, i) => {        
                return (         
                <BsStarFill key={i}/>        
                );
            })}
        </div>
    );
};

export default StarRatings;