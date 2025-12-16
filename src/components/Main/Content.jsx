import MemeFeed from '../Meme/memeApi';

const Content = () => {
	return (
		<>
			<main className={'main'}>
				<div className={'main__wrapper'}>
					<div className={'content'}>
						<h2>Trending Memes</h2>
						<MemeFeed />
					</div>
				</div>
			</main>
		</>
	);
};

export default Content;
