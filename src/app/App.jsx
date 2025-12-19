import { Routes, Route } from 'react-router-dom';
import './AppStyle.scss';
import HomePage from '../pages/Home/HomePage.jsx';
import AboutPage from '../pages/about/AboutPage.jsx';
import Content from '../widgets/Content/ui/Content.jsx';

const App = () => {
	return (
		<>
			<HomePage />
		</>
	);
};

export default App;
