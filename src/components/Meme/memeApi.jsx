import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/pagination.jsx';
import './memeFeedStyle.scss';

const LIMIT = 20;

const MemeFeed = () => {
	const [memes, setMemes] = useState([]);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);

	const API_KEY = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		const fetchMemes = async () => {
			try {
				setLoading(true);

				const offset = page * LIMIT;

				const res = await axios.get(
					`https://api.giphy.com/v1/gifs/search`,
					{
						params: {
							api_key: API_KEY,
							q: 'funny',
							limit: LIMIT,
							offset,
							rating: 'g',
						},
					}
				);

				setMemes(res.data.data);
			} catch (e) {
				console.error(e);
			} finally {
				setLoading(false);
			}
		};

		fetchMemes();
	}, [page, API_KEY]);

	return (
		<>
			<div className='meme-feed'>
				{loading && <p>Loading...</p>}

				{memes.map((meme) => (
					<div key={meme.id} className='meme-card'>
						<img
							src={
								meme.images?.fixed_height?.url ||
								meme.images?.downsized?.url ||
								meme.images?.original?.url
							}
							alt={meme.title}
						/>
					</div>
				))}
			</div>

			<Pagination page={page} setPage={setPage} />
		</>
	);
};

export default MemeFeed;
