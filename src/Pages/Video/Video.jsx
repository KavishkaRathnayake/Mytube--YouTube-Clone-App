import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'



const Video = () => {
  const {VideoId,categoryId} = useParams();
  return (
    <div className='play-container'>
          <PlayVideo VideoId={VideoId}/>
          <Recommended/>
         

    </div>
  )
}

export default Video