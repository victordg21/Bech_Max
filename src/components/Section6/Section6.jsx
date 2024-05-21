import { useState } from 'react'
import './Section6.css'

function Section6 (){


    return(
        <>
            <div className='section6Container'>
                <video className="finalVideo" autoPlay loop playsInline muted>
                    <source className='finalVvideo' src='/Video-final.mp4' type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Section6