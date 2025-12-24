import Header from '../../widgets/Header/ui/Header.jsx';
import { useState, useEffect } from 'react';
import MemeFeed from '../../widgets/Meme/ui/memeApi.jsx';

const AboutPage = () => {
	const [reload, setReload] = useState(0);
	const [singleMeme, setSingleMeme] = useState(null);
	const API_KEY = import.meta.env.VITE_API_KEY;

	const apiMeme = `https://api.giphy.com/v1/gifs/trending?limit=1&api_key=${API_KEY}`;

	const handleReload = () => {
		setReload((r) => r + 1);
	};

	useEffect(() => {
		fetch(apiMeme)
			.then((res) => res.json())
			.then((data) => {
				if (data.data && data.data.length > 0) {
					setSingleMeme(data.data[0]);
				}
			})
			.catch((err) => console.error('Ошибка загрузки мема:', err));
	}, [reload]);

	return (
		<>
			<Header onReload={handleReload} />
			<main className='main'>
				<div className='main__wrapper'>
					<div className='content'>
						<h2>Приветствие!</h2>
						{singleMeme ? (
							<img
								src={singleMeme.images.fixed_height.url}
								alt={singleMeme.title}
								style={{ maxWidth: '300px' }}
							/>
						) : (
							<p>Загрузка мема...</p>
						)}
					</div>

					<div>
						<p>
							Мы — команда энтузиастов, которые любят мемы и хотят
							делиться хорошим настроением с каждым посетителем.
							Здесь вы можете не только увидеть самые трендовые и
							забавные мемы, но и немного расслабиться, улыбнуться
							и вдохновиться позитивом. Наша миссия — создавать
							пространство, где юмор объединяет людей, а каждый
							день начинается с улыбки. Надеемся, вам понравится!
						</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default AboutPage;
