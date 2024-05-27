import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
	const [data, setData] = useState(null);

	const download = async () => {
		const downloadedData = await axios.get(`http://localhost:80`);
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
