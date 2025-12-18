import './AppStyle.scss';
import { useState } from 'react';

import Header from '../components/Header/Header.jsx';
import Content from '../components/Main/Content.jsx';

const App = () => {
	const [reload, setReload] = useState(0);

	const handleReload = () => {
		setReload((r) => r + 1);
	};

	return (
		<>
			<Header onReload={handleReload} />
			<Content reload={reload} />
		</>
	);
};

export default App;
