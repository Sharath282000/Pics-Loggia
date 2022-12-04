import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import requests from '../request'
import Modal from './Modal'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Images = ({ issearch, searchimg }) => {
    const [images, setimages] = useState([]);
    const [openmodal, setopenmodel] = useState(false);
    const [id, setid] = useState(0);

    useEffect(() => {
        fetchImages();
    }, []);
    const fetchImages = () => {
        requests.fetchRandom.then(data => setimages(data.photos))
    }

    const imagehandle = (e) => {
        setid(e.target.id);
        setopenmodel(true)
    }

    return (
        <div>
            {!issearch &&
                <div className='grid'>
                    {images.length > 0 && images.map(data => <div key={data.id} className='grid-img'>
                        <LazyLoadImage src={data.src.original} id={data.id} placeholderSrc="placeholder.png"  width='100%' height='100%' effect="blur" onClick={imagehandle} /></div>
                    )}
                </div>}
            {issearch &&
                <div className='grid'>
                    {searchimg.length > 0 && searchimg.map(data => <div key={data.id} className='grid-img'>
                        <LazyLoadImage src={data.src.original} id={data.id} placeholderSrc="placeholder.png" width='100%' height='100%' effect="blur" onClick={imagehandle} /></div>
                    )}
                </div>}
            {openmodal && <Modal id={id} openmodal={openmodal} setopenmodal={setopenmodel} />}
        </div>
    )
}

export default Images