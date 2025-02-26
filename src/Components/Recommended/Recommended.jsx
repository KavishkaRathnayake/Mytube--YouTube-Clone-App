import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail9 from '../../assets/thumbnail9.png';
import thumbnail10 from '../../assets/thumbnail10.png';
import thumbnail11 from '../../assets/thumbnail11.png';
import thumbnail12 from '../../assets/thumbnail12.png';


const Recommended = ({categoryId}) => {

    const [apiData,setApiData] = useState([]);
    const fetchData = async ()  =>{
        const relatedVideo_url =  `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=Lk&videoCategoryId=${categoryId}&key=${API_KEY}`; 
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
    }

    useEffect(()=>{
        fetchData();
    },[])


  return (
    <div className='recommended'>
        
        <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Selenium Tutorial series | Sinhala | PART 2 - Launch Chrome Browsers using Selenium WebDriver</h4>
                <p>Learn Automation In Sinhala</p>
                <p>2.8k Views &bull; 11 months ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail9} alt=""/>
            <div className='vid-info'>
                <h4>How to become QA Engineer (Software quality assurance)</h4>
                <p>Geekpranee</p>
                <p>5.1k Views &bull; 5 months ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail10} alt=""/>
            <div className='vid-info'>
                <h4>Clean Bandit - Baby (feat. Marina & Luis Fonsi) [Official Video]</h4>
                <p>Clean Bandit</p>
                <p>330M Views &bull; 6 years ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail11} alt=""/>
            <div className='vid-info'>
                <h4>SANA - Alawanthakama ( ආලවන්තකම )👏 | Official Music Video</h4>
                <p>SANA</p>
                <p>588k Views &bull; 6 years ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail12} alt=""/>
            <div className='vid-info'>
                <h4>Skillz Jay - Yali Yali ( Radio Edit )</h4>
                <p>Skillz Jay</p>
                <p>1.4M Views &bull; 8 months ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail1} alt=""/>
            <div className='vid-info'>
                <h4>Best channel help you to be a millioner</h4>
                <p>Ape Amma</p>
                <p>88k Views</p>
            </div>
            </div>
 

    </div>
  )
}

export default Recommended