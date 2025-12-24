import './AppStyle.scss';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home/HomePage.jsx';
import AboutPage from '../pages/About/AboutPage.jsx';
import PopularPage from '../pages/popular/PopularPage.jsx';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/popular' element={<PopularPage />} />
			<Route path='/about' element={<AboutPage />} />
		</Routes>
	);
};

export default App;
