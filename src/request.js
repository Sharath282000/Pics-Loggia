import {createClient} from 'pexels';

const api_key = createClient(process.env.REACT_APP_ACCESS_KEY);

const requests ={
    fetchRandom : api_key.photos.curated({ per_page: 80 }),
    searchPhoto:api_key.photos,
    getPhoto:api_key.photos,
}

export default requests;