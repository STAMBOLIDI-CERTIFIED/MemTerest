import './paginationStyle.scss';

const Pagination = ({ page, setPage }) => {
	return (
		<div className='pagination'>
			<button
				onClick={() => setPage((p) => Math.max(p - 1, 0))}
				disabled={page === 0}
			>
				← Предыдущая
			</button>

			<span>Страница {page + 1}</span>

			<button onClick={() => setPage((p) => p + 1)}>Следующая →</button>
		</div>
	);
};

export default Pagination;
