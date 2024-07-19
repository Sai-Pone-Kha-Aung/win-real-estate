'use client'
import React, { Suspense, useEffect, useState } from 'react'
import './List.scss'
import Filter from '../filter/Filter'
import Card from '../card/Card'
import Map from '../map/Map'
import { PostData } from '@/types'
import { getDefaultPostData } from '@/constants/data'
import apiRequest from '@/lib/apiRequest'
import { useSearchParams } from 'next/navigation'

const ListPage = () => {
  const [post, setPost] = useState<PostData[]>
  ([getDefaultPostData()]);
  const searchParams = useSearchParams();
  useEffect(() => {
      const fetchData = async () => {
          try{
              const res = await apiRequest.get(`/posts?${searchParams.toString()}`);
              setPost(res.data);
          } catch(error){
              console.log("failed to fetch data", error);
          }
      }
      fetchData();
  }, []); 

  return (
    <div className='listPage'>
      <div className='listContainer'> 
        <div className='wrapper'>
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            {post.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Suspense>
        </div>
      </div> 
      <div className='mapContainer'>
      <Suspense fallback={<p>Loading...</p>}>
        <Map item={post}/>
      </Suspense>
      </div>
    </div>
  )
}

export default ListPage