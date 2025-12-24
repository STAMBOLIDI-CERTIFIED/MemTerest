import { useLocation } from 'react-router-dom';
import MemeFeed from '../../Meme/ui/memeApi.jsx';

const Content = ({ reload }) => {
	const location = useLocation();

	const apiMeme = location.pathname.endsWith('/popular')
		? 'https://api.giphy.com/v1/gifs/trending'
		: 'https://api.giphy.com/v1/gifs/search?q=funny';

	const Title =
		location.pathname === '/popular' ? 'Популярные мемы' : 'Лента мемов';

	console.log(apiMeme);

	return (
		<main className='main'>
			<div className='main__wrapper'>
				<div className='content'>
					<h2>{Title}</h2>
					<MemeFeed reload={reload} apiMeme={apiMeme} />
				</div>
			</div>
		</main>
	);
};

export default Content;
