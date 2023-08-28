// Package:
import axios from "axios";

// Contexts:
import { ProductContext } from "@/components/contexts/productContext";

// Components:
import ProductCard from "@/components/shop/ProductCard";
import Section from "@/components/ui/Section";
import Filter from "@/components/shop/filter/Filter";

const ProductList = ({ products }) => {
	
	return (
		<Section styled={'py-7'}>

			<h1 className="text-5xl capitalize text-center font-bold mb-20">shop<span className="text-rose-400">.</span> </h1>
			
			<div className="grid grid-cols-12 gap-4 md:gap-6 3xl:gap-9">

				<ProductContext.Provider value={{ products }}>
					{/* Filter Container Component */}
					<div className="col-span-12 lg:col-span-4 xl:col-span-3">
						<Filter minPrice={0} maxPrice={120} />
					</div>

					{/* Products Container Component */}
					<div className="col-span-12 lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 3xl:gap-6">
						{products.map((product) => (
							<ProductCard key={product.id} data={product}  />
						))}
					</div>
				</ProductContext.Provider>
			</div>

		</Section>
	)
}

export default ProductList;

export async function getStaticProps() {
	console.log('Grnarating/Regenarating Productlist');
	try {
		const res = await axios.get('https://next-server-two.vercel.app/products');
		const data = res.data;
		return {
			props: {
				products: data
			},
			revalidate: 10
		}
	} 
	catch (error) {
		console.log('Error Listing Products ==>', error);
	}
}
