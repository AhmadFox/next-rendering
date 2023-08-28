import Link from 'next/link';

const BlogCard = ({ blog }) => {
	return (
		<article className="bg-slate-800 px-4 py-6 rounded-md flex flex-col gap-y-3 justify-between">
			<div className="">
				<p className="text-xl font-bold line-clamp-1 mb-4">{blog.title}</p>
				<p className="text-slate-300 text-sm line-clamp-3">{blog.body}</p>
			</div>
			<Link className="text-cyan-400 capitalize font-semibold" href={`/blog/${blog.id}`}>read more</Link>
		</article>
	)
}

export default BlogCard;