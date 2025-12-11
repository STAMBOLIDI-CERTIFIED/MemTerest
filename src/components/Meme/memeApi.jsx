import { useEffect, useState } from 'react';
import axios from 'axios';
import './memeFeedStyle.scss';

const MemeFeed = () =>{
    const [memes, setMemes] = useState([]);
    const limit = 100;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promises = [];

    useEffect(() => {
        const fetchMemes = async () => {
            const offset = Math.floor(Math.random() * 3000);
            const res = await axios.get(
                `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=funny&limit=${limit}&offset=${offset}&rating=g`
            );
            setMemes(res.data.data);
        };


        fetchMemes();
    }, []);

    console.log(memes.length);

    return (
        <div className="meme-feed">
            {memes.map((meme) => (
                <div key={meme.id} className="meme-card">
                    <img src={
                        meme.images?.fixed_height?.url ||
                        meme.images?.downsized?.url ||
                        meme.images?.original?.url
                    } alt={meme.title} />
                </div>
            ))}
        </div>


    );
}

export default MemeFeed;
