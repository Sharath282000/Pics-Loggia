import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import requests from '../request';

const Header = ({setissearch,setsearchimg}) => {
    const [banner, setbanner] = useState([]);
    const [query,setquery]=useState('');


    useEffect(() => {
        fetchRandom();
    }, [])

    const searchform=(e)=>{
        setquery(e.target.value);
    }

    function searchPhoto(){
        setissearch(true);
        requests.searchPhoto.search({query,per_page:80}).then(data=>setsearchimg(data.photos))
    }

    const fetchRandom = () => {
        requests.fetchRandom.then(photos => setbanner(photos.photos[Math.floor(Math.random() * photos.photos.length - 1)].src.original));
    }
    return (
        <header className='banner' style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='banner-content'>
                <div className="header-content">
                    <div className="logo">
                        <img src='camera.ico'/>
                        <h2>Pics Loggia</h2>
                    </div>
                    <p>Pics Loggia -  A gallery of world's best photographs</p>
                    <div className='search-form'>
                        <input type='search' placeholder='Search Images' onChange={searchform} value={query}/>
                        <button type='button' className='btn' onClick={searchPhoto}>Search</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header