import { useEffect, useState } from 'react';
import axios from 'axios';
import './memeFeedStyle.scss';

const MemeFeed = () =>{
    const [memes, setMemes] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchMemes = async () => {
            try {
                const res = await axios.get(
                    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10000&rating=g`
                );
                setMemes(res.data.data);
            } catch (err) {
                console.error('Ошибка при получении мемов:', err);
            }
        };

        fetchMemes();
    }, []);

    return (
        <div className="meme-feed">
            {memes.map((meme) => (
                <div key={meme.id} className="meme-card">
                    <img src={meme.images.fixed_height.url} alt={meme.title} />
                </div>
            ))}
        </div>
    );
}

export default MemeFeed;
