import Section from "@/components/ui/Section";

const PageNotFound = () => {
	return (
		<Section styled={'py-28'}>
			<div>
				<h1 className="text-5xl font-bold mb-4 text-center">404</h1>
				<p className="text-center text-lg capitalize">Page not found!</p>
			</div>
	  	</Section>
	)
}

export default PageNotFound
