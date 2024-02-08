import React from 'react'

export default function Card(props) {
  return (
    <>
     <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="" />
        <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">Dark</h3>
            <a href="">
                <button>Open Code</button>
            </a>
        </div>
        </div>
    </div> 
    </>
  )
}
