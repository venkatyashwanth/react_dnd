import React from 'react'

function Card(props) {
    const dragstart = e =>{
        const target = e.target;

        e.dataTransfer.setData('card_id',target.id);
        setTimeout(()=>{
            target.style.display = "none";
        },0)
    }

    const dragOver = e => {
        e.stopPropogation();
    }
  return (
    <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart= {dragstart}
        onDragOver = {dragOver}
    >
        {props.children}
    </div>
  )
}

export default Card