import { useEffect, useState } from "react";




const Anime = () => {
    
    const [animeList, setAnimeList] = useState([]);

    const callAPI = async () => {
        try{
            const res = await fetch(`https://gogoanime.consumet.stream/popular`, {method:'GET'})
            const data = await res.json()
            setAnimeList(data)
            console.log(data);
        } catch(error){
            console.log(error);
        }
    }
    
    useEffect(()=> {
        callAPI();
    });
    return(
    <ul>
       {animeList.map((anime) => (
        <><li>{anime.animeTitle}</li><img src={anime.animeImg} alt="" /></>
       ))}
    </ul>

    )
} 
// export default Anime