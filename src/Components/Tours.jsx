
import React from 'react'
import Card from './Card'


function Tours({tours,removeTour}) {
  return (
  
        <div className='cards'>
               {
                 tours.map((tour)=>{
                      return (
                        <Card key={tour.id} {...tour} removeTour={removeTour}/>
                      )
                 })
               }
        </div>
  )
}

export default Tours

