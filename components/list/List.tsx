import React from 'react'
import './List.scss'
import Filter from '../filter/Filter'
import { listData } from '@/lib/dummyData'
import Card from '../card/Card'
import Map from '../map/Map'

const ListPage = () =>{
  const data = listData
  return (
    <div className='listPage'>
      <div className='listContainer'> 
        <div className='wrapper'>
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div> 
      <div className='mapContainer'>
        <Map item={data}/>
      </div>
    </div>
  )
}

export default ListPage