import React from 'react'
import SearchBar from 'react-search-box';
import Card from './Card';
import './Card.css';
import Project from '../Data/Project';

export default function Body() {
    const heading={
        // height:'1110px',
    }
  return (
    <>
       <SearchBar className="search"
        placeholder="Search..."/>

    <div style={heading}>
      <h1 className='heading_style'>Open source Projects</h1>
    </div>
    <h1>Our New Projects </h1>
    <div>
      <Card 
      imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyq62cvVfus7JbEzNO_YK-87vTeBPcIbZAw&usqp=CAU"
      title="New app2"
      sname ="Dark2 new"
      link = ""
      />
      <Card
      imgsrc="data:image/png;base64,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"
      title="New app3"
      sname ="Dark3 new"
      link = ""
      />
      <Card
      imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyq62cvVfus7JbEzNO_YK-87vTeBPcIbZAw&usqp=CAU"
      title="New app"
      sname ="Dark new"
      link = ""
      />
      <Card
      // imgsrc={Project[0].imgsrc}
      title={Project[0].title}
      sname={Project[0].sname}
      link={Project[0].link}
      />

<Card
      // imgsrc={Project[0].imgsrc}
      title={Project[1].title}
      sname={Project[1].sname}
      link={Project[1].link}
      />
      <Card
      // imgsrc={Project[0].imgsrc}
      title={Project[2].title}
      sname={Project[2].sname}
      link={Project[2].link}
      />
    </div>
    </>
  )
}
