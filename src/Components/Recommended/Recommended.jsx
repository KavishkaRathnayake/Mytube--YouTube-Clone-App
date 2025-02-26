import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail9 from '../../assets/thumbnail9.png';
import thumbnail10 from '../../assets/thumbnail10.png';
import thumbnail11 from '../../assets/thumbnail11.png';
import thumbnail12 from '../../assets/thumbnail12.png';
import thumbnail13 from '../../assets/thumbnail13.png';
import thumbnail14 from '../../assets/thumbnail14.png';
import thumbnail15 from '../../assets/thumbnail15.png';
import thumbnail16 from '../../assets/thumbnail16.png';
import thumbnail17 from '../../assets/thumbnail17.png';
import thumbnail18 from '../../assets/thumbnail18.png';
import thumbnail19 from '../../assets/thumbnail19.png';
import thumbnail20 from '../../assets/thumbnail20.png';
import thumbnail21 from '../../assets/thumbnail21.png';


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
                <p>2.8K Views &bull; 11 months ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail9} alt=""/>
            <div className='vid-info'>
                <h4>How to become QA Engineer (Software quality assurance)</h4>
                <p>Geekpranee</p>
                <p>5.1K Views &bull; 5 months ago</p>
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
                <p>588K Views &bull; 6 years ago</p>
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
            <img src={thumbnail13} alt=""/>
            <div className='vid-info'>
                <h4>Hitha Ridawana | Sanka Dineth | RED ‪@SriLankaRupavahinitv‬</h4>
                <p>Roo Tunes</p>
                <p>341K Views &bull; 3 years ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail14} alt=""/>
            <div className='vid-info'>
                <h4>Sia - Incredible (feat. Labrinth)</h4>
                <p>Sia</p>
                <p>1.9M Views &bull; 10 months ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail15} alt=""/>
            <div className='vid-info'>
                <h4>Avicii - Hey Brother</h4>
                <p>Avicii</p>
                <p>327M Views &bull; 11 years ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail16} alt=""/>
            <div className='vid-info'>
                <h4>සංජීවගේ ඝාතක හා සෙව්වන්දි කිරි බීලා, ටිපිටිප් කකා ගිය හැටි - පොත කපලා තුවක්කුව හංගපු හැටිත් වමාරයි</h4>
                <p>Hiru News</p>
                <p>226K Views &bull; 5 hours ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail17} alt=""/>
            <div className='vid-info'>
                <h4>ගූගල් මැප් එක | Google Map Eka | Siril Videos</h4>
                <p>Siril Ayya</p>
                <p>586K Views &bull; 5 days ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail18} alt=""/>
            <div className='vid-info'>
                <h4>තරුණියන්ගේ හිස වෙන්කොට ලේ වලින් සළකුණු කරන ඝාතකයෙක් 😱🔥| දක්ශිනා 2025 Movie Explained by Ruu Cinema</h4>
                <p>Ruu Cinema</p>
                <p>84K Views &bull; 6 days ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail19} alt=""/>
            <div className='vid-info'>
                <h4>FULL HIGHLIGHTS SRI LANKA VS SOUTH AFRICA MASTERS IML T20 MATCH FULL HIGHLIGHTS 2025 || SL VS SA</h4>
                <p>TR Reviews</p>
                <p>79K Views &bull; 2 days ago</p>
            </div>
            
            </div>

            <div className='side-video-list'>
            <img src={thumbnail20} alt=""/>
            <div className='vid-info'>
                <h4>QA, Testing කියන්නේ අද IT Industry එකේ හොඳම Career path එකක් - Selenium Test Automation ඉගෙනගමු</h4>
                <p>Sanjaya Elvitigala</p>
                <p>14K Views &bull; 9 months ago</p>
            </div>
            </div>

            <div className='side-video-list'>
            <img src={thumbnail21} alt=""/>
            <div className='vid-info'>
                <h4>Udurawee - උදුරාවී | Hansi Shalika | Hiru Star Season 04 | 2nd Round 🌟</h4>
                <p>Hiru star</p>
                <p>83K Views &bull; 9 months ago</p>
            </div>
            </div>

            

    </div>
  )
}

export default Recommended