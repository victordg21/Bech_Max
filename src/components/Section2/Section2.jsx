import { useState } from 'react'
import './Section2.css'

function Section2 (){

    const images = [
        'https://via.placeholder.com/100x100?text=Image+1',
        'https://via.placeholder.com/100x100?text=Image+2',
        'https://via.placeholder.com/100x100?text=Image+3',
        'https://via.placeholder.com/100x100?text=Image+4',
        'https://via.placeholder.com/100x100?text=Image+5',
        'https://via.placeholder.com/100x100?text=Image+6',
        'https://via.placeholder.com/100x100?text=Image+7',
        ];


    return(
        <>
            <div className='Section2'>
                <div className='Section2-Container'>
                    <h2 className='title'>ONDE COMPRAR</h2>
                </div>
                    <div className='images-line' >
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </div>
            </div>
        </>
    )
}

export default Section2