import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageSilder = () => {

    const data = [
        "https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1521109464564-2fa2faa95858?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542461927-dd68c85adc56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]

    const [active, setActive] = useState(1);

    useEffect(()=>{
    const interval = setInterval(()=>{
        loadNextImage();
    }, 3000)
    return () =>{
        clearInterval(interval)
    }
    },[])
    
    const loadPrevImage =() =>{
        setActive((active) => (active-1 < 0 ? data.length-1 : active-1))
    } 
    const loadNextImage = () =>{
        setActive((active) => (active + 1) % data.length)
    } 
    
  return (
    <div className='slider-box'>
    <FontAwesomeIcon className='left-arrow' 
    onClick={loadPrevImage}
    icon={faChevronLeft} />  
    <img className='images' src={data[active]} alt ="Wallpaper"/>
    <FontAwesomeIcon className='right-arrow'
    onClick={loadNextImage}
    icon={faChevronRight} />
    </div>
  )
}

export default ImageSilder
