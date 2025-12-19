import './paginationStyle.scss';

const Pagination = ({ page, setPage }) => {
	return (
		<div className='pagination'>
			<div className='pagination__wrapper'>
				<button
					className='pagination__button'
					onClick={() => setPage((p) => Math.max(p - 1, 0))}
					disabled={page === 0}
				>
					← Предыдущая
				</button>

				<span className='pagination__title'>Страница {page + 1}</span>

				<button
					onClick={() => setPage((p) => p + 1)}
					className='pagination__button'
				>
					Следующая →
				</button>
			</div>
		</div>
	);
};

export default Pagination;
