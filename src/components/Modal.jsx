import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import requests from '../request';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Modal = ({setopenmodal,id}) => {
    const [image,setimage]=useState([]);
    const [url,seturl]=useState([]);
    useEffect(()=>{
        requests.getPhoto.show({id:id}).then(data=>setimage(data))
        requests.getPhoto.show({id:id}).then(data=>seturl(data.src))
    },[id])
    function handleclose(){
        setopenmodal(false);
    }

    return (
        image && image!==null && image!==undefined && url!==null &&
        <div className='modal'>
            <div className="close-btn">
                <h3>{image.alt?image.alt:""}</h3>
                <img src="close.png" onClick={handleclose} />
            </div>
            <div className="content">
                <div className="img-block"> <LazyLoadImage src={url.landscape} placeholderSrc="placeholder.png" width='100%' height='100%' effect="blur"/><div className="title"><p>- {image.photographer}</p></div></div>
            </div>
            <div className='btn-block'>
                <a href={url.original} download target="_blank" className='btn'>Download</a>
            </div>
        </div>
    )
}

export default Modal