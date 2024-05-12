import React from 'react'
import { useState } from 'react';
function Card({id,name,info,image,price,removeTour}) {
    const [readmore,setReadmore]=useState(false);
    const [desc,setDesc]=useState()
    const description=(readmore)?info:`${info.substring(0,200)}...`;
    function readmorecall()
    {
        setReadmore(!readmore);
    }
  return (
    <div className='card'>
          
          <img src={image} className='image'/>
          <div className='tour-details'>
               <h4 className='tour-price'> ₹ {price}</h4>
               <h4 className='tour-name'>{name}</h4>
               <p className='tour-description'>
                   {
                    description
                   }            
                <span onClick={readmorecall} className='rmore'>
                   {
                   (readmore)? " read less":"read more"
                   }
                </span>
               </p>
          </div>
          <button className='button' onClick={()=>removeTour(id)}>Not Interested</button>
    </div>
  )
}

export default Card
