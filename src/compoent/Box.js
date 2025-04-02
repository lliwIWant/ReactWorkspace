import React, { useState } from 'react'

const Box = (props) => {

  return (

    <div className={`box ${props.result}`}>
        <h1 className='font'>{props.title}</h1>
        <img className={`item-img ${props.result == 'lose'||props.result=='tie' ? 'gray':''} `} src={props.item && props.item.img}/>
                                                            {/* props.item이 null이 아니라면 img 값 출력 */}
        <h2 className={`text ${props.result}`}>{props.result}</h2>
        <div className={`count text ${props.result}`}>{props.times ==0 ? '': props.count}</div>
    </div>
  
  )
}

export default Box
