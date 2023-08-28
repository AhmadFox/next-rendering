import FilterPrice from "@/components/shop/filter/FilterPrice";
import FilterColor from "@/components/shop/filter/FilterColor";

const Filter = ({ colors, minPrice, maxPrice }) => {
	return (
		<div className="bg-slate-900 border border-slate-700 rounded-md px-4 py-6">

			{/* Filter By Colors */}
			<FilterColor colors={colors} />

			{/* Filter By Price */}
			<FilterPrice 
				min={minPrice}
				max={maxPrice}
				onChange={({ min, max }) => ''}
			/>
		
		</div>
	)
}

export default Filter
