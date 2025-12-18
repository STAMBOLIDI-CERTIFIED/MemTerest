import { useState, useEffect } from 'react';

const Header = ({ onReload }) => {
	return (
		<>
			<nav className='nav'>
				<div>
					<h2>МемТорест</h2>
				</div>

				<div className='nav__list'>
					<ul>
						<li>
							<a href=''>Домой</a>
						</li>
						<li>
							<a href=''>Популярное</a>
						</li>
						<li>
							<a href=''>О нас</a>
						</li>
					</ul>
				</div>

				<div>
					<button className='nav__buttonReload' onClick={onReload}>
						Обновить мемы
					</button>
				</div>
			</nav>
		</>
	);
};

export default Header;
