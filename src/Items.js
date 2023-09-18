import React from 'react'
import {data} from './data.js'
import "./App.css"
import { useParams } from 'react-router-dom'
const Item = () => {
 const {id}=useParams();
 console.log(id)
 const project=data[id-1]
  return (
   <div className='container'> <div className='box '>
      <div>
        <img  className1
        className='image' src={project.image}></img>
        <div className="item-call" style={{display:'flex', gap:"20px" , width:"200px"}}>
        <div className="call" > callnow</div>
        <div className="cal"> give</div></div>  </div>  
        
       <div > 
        <div  className='boxside'>
          <h1 style={{color:"wheat"}}> {project.name}</h1>
         
       <table>
  <tr>
    <th>color</th>
    <th>{project.color}</th>
   
  </tr>
  <tr>
    <td>Minimum Order Quantity</td>
    <td>{project.quantity}</td>
  
  
  </tr>
  <tr>
    <td>contact</td>
    <td>9025451148</td>
    
   
  </tr>
  <tr>
    <td>Areas of available</td>
    <td>{project.area}</td>
  
  
  </tr>

</table>
</div>
       </div>
        
       </div>

      
        
</div>
  )
}

export default Item