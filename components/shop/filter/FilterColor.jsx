import { useState, useContext } from "react";

import { ProductContext } from "@/components/contexts/productContext";

const FilterColor = () => {

	// Hooks for contexts:
	const { products } = useContext(ProductContext);
	
	// Hooks for states:
	const [ selectedColors, setSelectedColors ] = useState([]);

	// Get all avilable colors [ without repeat ]
	const colors = Array.from(new Set(Object.values(products.map((item) => item.colors)).flat()));

	// Function to check selected color aand add class
	const colorFilterHandler = (e) => {

		// Toggle color check
		if ( selectedColors.includes(e.target.value) ) {
			setSelectedColors(selectedColors.filter(item => item !== e.target.value))
			e.target.className = e.target.className.split('selected').join('');
		} else {
			setSelectedColors([...selectedColors, e.target.value]);
			e.target.className = `${e.target.className} selected`;
		}

	}
	
	return (
		<div className="mb-4 border-b border-slate-800 pb-4">
			<div className="flex justify-between items-center mb-2">
				<p className="text-slate-300 text-sm xl:text-base uppercase font-semibold">colors:</p>
				<button onClick={() => setSelectedColors([])} className="text-cyan-300 font-semibold text-sm capitalize" disabled={!selectedColors.length > 0}>reset colors</button>
			</div>
			<ul className="flex flex-wrap gap-2 mb-4" id="color-option">
				{colors.map((color, idx) => (
					<li key={idx}>
						<button value={color} onClick={colorFilterHandler} className={`filter-option-color ${color === 'black' || color === 'white' ? `bg-${color}` : `bg-${color}-400` }`}>
							<span className="sr-only">Filter Color {color} Button</span>
						</button>
					</li>
				))}
			</ul>
			<span className="text-sm flex gap-x-1 text-slate-400 capitalize font-semibold">
				{selectedColors.length === 0 ? 'All Colors Selected' : selectedColors.map((e) => <small key={e}>{e},</small>)}
			</span>
		</div>
	)
}

export default FilterColor;