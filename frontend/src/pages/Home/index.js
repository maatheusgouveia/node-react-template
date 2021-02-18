import { useEffect } from 'react';

import api from '../../services/api';

function Home() {
	useEffect(() => {
		api.get('users/maatheusgouveia');
	}, []);

	return <h1>Home</h1>;
}

export default Home;
