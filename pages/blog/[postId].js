import { useRouter } from "next/router";

// Package:
import Link from "next/link";
import axios from "axios";

// Components:
import Section from "@/components/ui/Section";

const Post = ({ post }) => {

  const router = useRouter();

  return (
    <Section styled={'py-7'}>
      {
        router.isFallback ? <h1 className="text-3xl text-center">Loading ...</h1> :
        <div className="">
          <h1 className="text-3xl text-slate-300 capitalize font-bold mb-9">{post.title}</h1>
          <p className="text-slate-300">{post.body}</p>
          <div className="my-9"><Link href="/blog" className="text-cyan-400 font-semibold capitalize">back To Blog</Link></div>
        </div>
      }
    </Section>
  )
}

export default Post;

export async function getStaticPaths() {
  try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
		const data = res.data;

    // const paths = data.map((post) => {
    //   return {
    //     params: {
    //       postId: `${post.id}`
    //     }
    //   }
    // })

    return {
      paths: [
        {
          params: { postId: '1'}
        },
        {
          params: { postId: '2'}
        },
        {
          params: { postId: '3'}
        },
        {
          params: { postId: '4'}
        },
        {
          params: { postId: '5'}
        },
        {
          params: { postId: '6'}
        },
        {
          params: { postId: '7'}
        },
        {
          params: { postId: '8'}
        },
        {
          params: { postId: '9'}
        },
        {
          params: { postId: '10'}
        },
        {
          params: { postId: '11'}
        },
        {
          params: { postId: '12'}
        }
      ],
      fallback: true
    }
	} 
	catch (error) {
		console.log(error);
	}
}

export async function getStaticProps(context) {
  const { params } = context;
  try {
		const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
		const data = res.data;
		return {
      props: {
        post: data
      }
    }
	} 
	catch (error) {
		console.log(error);
	}
}