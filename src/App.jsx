import { useState } from 'react'
import './App.css'
import Tours from './Components/Tours'
import data from './data'

function App() {
  const [tours,setTour]=useState(data);
  function removeTour(id){
   const newtours=tours.filter((tour)=>tour.id!==id);
    setTour(newtours);
  }
  
  if(tours.length==0)
    {
      return(
        <div className='no-tour'>
          <div className='notour-head'>
            No Tour Left
          </div>
          <button onClick={()=>setTour(data)} className='ref-btn'>Refresh</button>
        </div>
      )
    }
  return (
    <div className='container'>
       <div className='head'>
        <h2>Plan and Enjoy</h2>
       </div>
       <div className='tour'>
       <Tours tours={tours} removeTour={removeTour}/>
       </div>
    </div>
  )
}

export default App
