import Image from 'next/image';
import { useRouter } from 'next/router';

// Package:
import axios from "axios";

// Components:
import Section from "@/components/ui/Section";
import { useState } from 'react';

const Product = ({ product }) => {

	const [ size, setSize ] = useState(false);
	const [ color, setColor ] = useState(false);
	const router = useRouter();

	return (
		<Section styled={'py-20'}>
			{
				router.isFallback ? <h1 className="text-3xl text-center">Loading ...</h1> :
				<div className="grid md:grid-cols-12 gap-x-9">
					<div className="col-span-12 md:col-span-6 mb-9 md:mb-0 relative bg-slate-800 flex justify-center items-center group">
						<Image
							className="w-full h-auto group-hover:scale-125 ease-in-out duration-500"
							src={`/${product.image}`}
							alt="Product Thumbnail"
							width={300}
							height={300}
							priority
						/>
					</div>
					<div className="col-span-12 md:col-span-6 flex flex-col justify-between">
					<div className="bg-red-400 bg-green-400 bg-blue-400 bg-yellow-400 bg-gray-400 bg-black bg-white"></div>
						<div className="">
							<div className="flex justify-between items-center mb-2">
								<h1 className="text-2xl xl:text-3xl font-bold capitalize">{product.title}</h1>
								<span className={`capitalize text-sm ${ product.availabilty ? 'text-green-500' : 'text-red-200'}`}>{product.availabilty ? 'in stock' : 'out of stock'}</span>
							</div>
							<p className="text-slate-400 mb-4">SKU: {product.sku}</p>
							<div className="flex items-center gap-x-2 mb-6">
								<p className="text-3xl font-bold text-cyan-300">{product.price} JD</p>
								<span className="text-red-400 text-lg font-semibold line-through">{product.oldPrice} JD</span>
							</div>
							<div className="flex items-center gap-x-4 mb-9">
								<p className="text-lg font-bold capitalize">Color:</p>
								<ul className="flex gap-x-3 vairiation">
								{
									product.colors.map((option, idx) => (
										<li key={idx}>
											<button onClick={() => setColor((prev) => !prev)} className={`btn color ${option === 'black' || option === 'white' ? `bg-${option}` : `bg-${option}-400` }`}>
												<span className="sr-only">Filter Color {option} Button</span>
											</button>
										</li>
									))
								}
								</ul>
							</div>
							<div className="mb-9">
								<p className="text-xl font-bold capitalize">Details:</p>
								<p className="text-slate-400 xl:text-lg">{product.details}</p>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-x-6">
							<button className="py-3 px-6 rounded-sm font-semibold text-slate-800 bg-slate-400 hover:bg-slate-200 uppercase ease-in-out duration-200">add to Wishlist</button>
							<button className="py-3 px-6 rounded-sm font-semibold bg-purple-600 hover:bg-purple-500 uppercase ease-in-out duration-200">add to cart</button>
						</div>
					</div>
				</div>
			}
		</Section>
	)
}

export default Product;

export async function getStaticPaths() {
	try {
		const res = await axios.get('https://next-server-two.vercel.app/products');
		const data = res.data;
  
		const paths = data.map((item) => {
			return {
				params: {
					porductId: `${item.id}`
				}
			}
		})
  
		return {
			paths,
			fallback: false
		}
	} 
	catch (error) {
		console.log(error);
	}
}
  
export async function getStaticProps(context) {
	const { params } = context;
	// console.log(`Regenarate Product: ${params.productId}`);
	try {
		const res = await axios.get(`https://next-server-two.vercel.app/products/${params.porductId}`);
		const data = res.data;

		// if (!data.id) {
		// 	return {
		// 		notfound: true
		// 	}
		// }

		return {
			props: {
				product: data, // Incremantal Static Page genaration (ISG)
			},
			revalidate: 10
		}
	} 
	catch (error) {
		console.log(error);
	}
}