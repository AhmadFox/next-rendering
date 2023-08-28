import { useState, useEffect } from 'react';

// Packages:
import axios from "axios";

// Components:
import Section from '@/components/ui/Section';

const Dashboard = () => {

	const [ isLoading, setIsLodaing ] = useState(true);
	const [ dashbaordData, setdashbaordData ] = useState([]);

	useEffect(() => {
		async function fetchDashboardData() {
			try {
				const res = await axios.get('https://next-server-two.vercel.app/dashbaord');
				const data = res.data;
				setdashbaordData(data);
			} 
			catch (error) {
				console.log(error);
			}
		}
		fetchDashboardData()
		setIsLodaing(false)
	}, []);

	if ( isLoading ) {
		return <h2>Loading...</h2>
	}

	return (
		<Section styled={'py-7'}>
			<h1 className="text-2xl capitalize mb-9">Dashboard</h1>
			{
				dashbaordData.length > 0 && 
				<div className="grid gap-4">
					<p className="font-bold">Posts: {dashbaordData.posts}</p>
					<p className="font-bold">liks: {dashbaordData.liks}</p>
					<p className="font-bold">followers: {dashbaordData.followers}</p>
					<p className="font-bold">following: {dashbaordData.following}</p>
				</div>
			}
		</Section>
	)
}

export default Dashboard;


