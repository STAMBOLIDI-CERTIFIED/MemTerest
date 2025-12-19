import { NavLink } from 'react-router-dom';
import './HeaderStyle.scss';

const Header = ({ onReload }) => {
	return (
		<nav className='nav'>
			<div>
				<h2>МемТорест</h2>
			</div>

			<div className='nav__list'>
				<ul>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? 'nav__link--active' : 'nav__link'
							}
						>
							Домой
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/popular'
							className={({ isActive }) =>
								isActive
									? 'nav__link nav__link--active'
									: 'nav__link'
							}
						>
							Популярное
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/about'
							className={({ isActive }) =>
								isActive
									? 'nav__link nav__link--active'
									: 'nav__link'
							}
						>
							О нас
						</NavLink>
					</li>
				</ul>
			</div>

			<div>
				<button className='nav__buttonReload' onClick={onReload}>
					Обновить мемы
				</button>
			</div>
		</nav>
	);
};

export default Header;
