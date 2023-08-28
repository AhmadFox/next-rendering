import React from 'react'

const Container = ({ children }) => {
	return (
		<div className="px-6 lg:px-0 lg:w-11/12 xl:w-10/12 2xl:w-10/12 3xl:w-9/12 mx-auto">
			{children}
		</div>
	)
}

export default Container
