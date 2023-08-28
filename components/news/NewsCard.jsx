import Link from 'next/link';

const NewsCard = ({ artical }) => {
	return (
		<div className="px-4 py-6 bg-slate-800 rounded-md">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-xl font-bold mb-2">{artical.title}</h1>
				<Link href={`/news/${artical.category}`} className='rounded-full capitalize py-1.5 text-xs font-semibold px-4 bg-slate-400 text-slate-800'>{artical.category}</Link>
			</div>
			<p className="text-sm text-slate-300">{artical.description}</p>
		</div>
	)
}

export default NewsCard
