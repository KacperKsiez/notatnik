import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
	const [data, setData] = useState(null);

	const download = async () => {
		const downloadedData = await axios.get(`https://notatnik-server-drnciyj3m-kacperksiezs-projects.vercel.app/`);
		setData(downloadedData.data);
	};

	useEffect(() => {
		download();
	}, []);
	useEffect(() => {
		console.log(data);
	}, [data]);

	return <div>{data}</div>;
};

export default App;
