import axios from "axios";

import Section from '@/components/ui/Section';
import NewsCard from '@/components/news/NewsCard';

const News = ({ newsList }) => {
	return (
		<Section styled={'py-7'}>
			<h1 className="text-5xl capitalize text-center font-bold mb-12">News<span className="text-rose-400">.</span> </h1>
			<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
				{
					newsList.map((artical) => (
						<NewsCard key={artical.id} artical={artical} />
					))
				}
			</div>
		</Section>
	)
}

export default News;

export async function getServerSideProps() {
	try {
		const res = await axios.get('https://next-server-two.vercel.app/news');
		const data = res.data;
		return {
			props: {
				newsList: data
			}
		}
	} 
	catch (error) {
		console.log(error);
	}
}
