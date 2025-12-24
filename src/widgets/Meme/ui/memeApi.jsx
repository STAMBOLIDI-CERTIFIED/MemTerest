import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../../Pagination/ui/pagination.jsx';
import './memeFeedStyle.scss';

const LIMIT = 10;

const MemeFeed = ({ reload, apiMeme }) => {
	const [memes, setMemes] = useState([]);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);
	const [totalCount, setTotalCount] = useState(0);
	const [selectedMeme, setSelectedMeme] = useState(null);

	const API_KEY = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		const fetchMemes = async () => {
			try {
				setLoading(true);

				const offset = page * LIMIT;

				const res = await axios.get(apiMeme, {
					params: {
						api_key: API_KEY,
						limit: LIMIT,
						offset,
						rating: 'g',
					},
				});

				setMemes(res.data.data);
				setTotalCount(res.data.pagination.total_count);
			} catch (e) {
				console.error(e);
			} finally {
				setLoading(false);
			}
		};

		fetchMemes();
	}, [page, reload, apiMeme, API_KEY]);

	useEffect(() => {
		setPage(0);
	}, [apiMeme]);

	const totalPages = Math.ceil(totalCount / LIMIT);

	return (
		<>
			<div className='meme-feed'>
				{loading && <p>Loading...</p>}
				{memes.map((meme) => (
					<div
						key={meme.id}
						className='meme-card'
						onClick={() => setSelectedMeme(meme)}
					>
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

			<Pagination page={page} setPage={setPage} totalPages={totalPages} />

			{selectedMeme && (
				<div
					className='meme-modal'
					onClick={() => setSelectedMeme(null)}
				>
					<div
						className='meme-modal__content'
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={selectedMeme.images?.original?.url}
							alt={selectedMeme.title}
						/>
						<button
							className='meme-modal__close'
							onClick={() => setSelectedMeme(null)}
						>
							X
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default MemeFeed;
