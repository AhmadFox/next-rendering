import Image from 'next/image';
import Link from 'next/link';


const ProductCard = ({ data }) => {

	return (
		<Link href={`/shop/${data.id}`} className="bg-slate-900 overflow-hidden rounded-md group">
			<div className="relative bg-slate-800 h-52 w-auto flex justify-center items-center">
				<Image
					className="w-40 h-40 m-auto object-cover group-hover:scale-125 ease-in-out duration-500"
					src={`/${data.image}`}
					alt="Product Thumbnail"
					width={300}
					height={300}
					priority
				/>
				<span className={`capitalize absolute left-3 top-3 text-xs ${ data.availabilty ? 'text-green-400' : 'text-red-400'}`}>{data.availabilty ? 'in stock' : 'out of stock'}</span>
			</div>

			<div className="flex flex-col justify-between p-4">			
				<div className="mb-4 flex flex-col gap-y-2">
					<p className="text-lg font-semibold capitalize text-center md:text-start line-clamp-1">{data.title}</p>
					<span className="block text-slate-400 capitalize text-xs text-center md:text-start">SKU: {data.sku}</span>
				</div>
				<div className="flex flex-col md:flex-row gap-y-3 items-center justify-between">
					<div className="flex gap-x-2 items-end">
						<span className="text-cyan-400 capitalize text-xl font-bold">{data.price}
							<small className="text-sm ml-1">JD</small>
						</span>
						<span className='text-red-400 text-sm font-semibold line-through'>{data.oldPrice} <small className="text-xs">JD</small></span>
					</div>
					<ul className="flex items-center gap-x-2">
						{data.colors.map((color) => (
							<li key={color}>
								<button className={`card-option-color ${color === 'black' || color === 'white' ? `bg-${color}` : `bg-${color}-400` }`}>
									<span className="sr-only">Filter Color {color} Button</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
