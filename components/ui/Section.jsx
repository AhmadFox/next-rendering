import Container from "./Container"

const Section = ({children, styled}) => {
	return (
		<section className={`py-2 ${styled}`}>
			<Container>
				{children}
			</Container>
		</section>
	)
}

export default Section
