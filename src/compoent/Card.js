import React from 'react'

const Card = (props) => {
  return (
    <div className='card' onClick={props.click}>
        <img className='cardImg' src={props.object.img}/> 
        <h2>{props.object.name}</h2>
    </div>
  )
}

export default Card