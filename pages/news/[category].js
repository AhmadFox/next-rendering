import axios from "axios";

import Section from '@/components/ui/Section';
import NewsCard from '@/components/news/NewsCard';

const NewsListByCategory = ({ news, category }) => {
	return (
		<Section styled={'py-7'}>
			<h1 className="text-5xl capitalize text-center font-bold mb-12">News<span className="text-rose-400">.</span> </h1>
			<h3 className="mb-9">list artical for category: <i className='text-cyan-400 font-semibold capitalize'>{category}</i></h3>
			<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
				{
					news.map((artical) => (
						<NewsCard key={artical.id} artical={artical} />
					))
				}
			</div>
		</Section>
	)
}

export default NewsListByCategory;

export async function getServerSideProps(context) {
	const { params, req, res, query } = context;
	console.log(query);
	console.log(req.headers.cookie);
	res.setHeader('Set-Cookie', ['name=Ahmad']);
	const { category } = params;

	try {
		const res = await axios.get(`https://next-server-two.vercel.app/news?category=${category}`);
		const data = res.data;
		return {
			props: {
				news: data,
				category
			}
		}
	} 
	catch (error) {
		console.log(error);
	}
}