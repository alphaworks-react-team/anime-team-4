import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import utils from '../utils/animeAPI.js';




const AnimePage = () => {

  const params = useParams()
  const [anime, setAnime] = useState([])
  
  const getAnime = async () => {
    
    const fetchAnime = await utils.AnimeByID(params.id);
    setAnime(fetchAnime)

  };

  useEffect(()=> {
    getAnime()
  })
  
  
  return (
    <div>
      {anime.attributes && (
        <h1>
          {anime.attributes.titles.en
            ? anime.attributes.titles.en
            : anime.attributes.titles.en_jp}
        </h1>
      )}
    </div>
  );
}

export default AnimePage
