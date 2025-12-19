import MemeFeed from '../../Meme/ui/memeApi.jsx';

const Content = ({ reload }) => {
	return (
		<>
			<main className={'main'}>
				<div className={'main__wrapper'}>
					<div className={'content'}>
						<h2>Лента мемов</h2>
						<MemeFeed reload={reload} />
					</div>
				</div>
			</main>
		</>
	);
};

export default Content;
