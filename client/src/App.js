import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
	const [data, setData] = useState(null);

	const download = async () => {
		const downloadedData = await axios.get(`https://notatnik-server-7s2nint0b-kacperksiezs-projects.vercel.app/`);
		setData(downloadedData.data);
	};

	useEffect(() => {
		download();
	}, []);
	useEffect(() => {
		console.log(data);
	}, [data]);

	return <div>asd</div>;
};

export default App;
