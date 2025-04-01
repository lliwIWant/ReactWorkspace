import React from 'react'

const Box = (props) => {
  return (

    <div className="box">
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img}/>
                                                            {/* props.item이 null이 아니라면 img 값 출력 */}
        <h2>{props.result}</h2>
    </div>
  
  )
}

export default Box
