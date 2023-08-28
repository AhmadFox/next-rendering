// Package:
import Link from "next/link";
import axios from "axios";

// Components:
import BlogCard from "@/components/blog/BlogCard";
import Section from "@/components/ui/Section";

const BlogList = ({ posts }) => {

  return (
    <Section styled={'py-7'}>
	    <h1 className="text-5xl capitalize text-center font-bold mb-12">blog<span className="text-rose-400">.</span> </h1>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                posts.map((post) => (
                    <BlogCard key={post.id} blog={post} />
                ))
            }
        </div>
        <ul className="flex gap-x-2">
            <li>
                <Link href="blog-"></Link>
            </li>
        </ul>
    </Section>
  )
}

export default BlogList;

export async function getStaticProps() {
	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
		const data = res.data;
		return {
			props: {
				posts: data
			}
		}
	} 
	catch (error) {
		console.log(error);
	}
}
