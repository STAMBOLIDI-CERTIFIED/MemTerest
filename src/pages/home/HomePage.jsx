import Header from '../../widgets/Header/ui/Header.jsx';
import Content from '../../widgets/Content/ui/Content.jsx';
import { useState } from 'react';

const HomePage = () => {
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

export default HomePage;
