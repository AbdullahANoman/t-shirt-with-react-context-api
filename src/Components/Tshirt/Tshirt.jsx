import React from 'react';
import './Tshirt.css'
const Tshirt = ({tShirt}) => {
    console.log(tShirt)
    const {picture,name,_id,price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>Name : {name}</h3>
            <h4>Price : {price}</h4>
            <button>Buy Now</button>
        </div>
    );
};

export default Tshirt;