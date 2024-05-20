import { useState } from 'react'
import './Home.css'

function Home (){


    return(
        <>
            <div className='HomeContainer'>
                <video className="bgVideo" autoPlay loop playsInline muted>
                    <source className='video' src='./src/assets/Video-Site.mp4' type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Home