import Head from 'next/head';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

import Image from 'next/image';

const Layout = ({ children }) => {
	return (
		<div className="h-full">
			<div className="fixed h-1/2 w-full top-0">
				<Image
					className="w-1/2 -translate-y-32 h-auto m-auto object-cover group-hover:scale-125 ease-in-out duration-500"
					src="/bg-rays.png"
					alt="Background Gradiant"
					width={300}
					height={300}
					priority
				/>
			</div>
			<main className='flex min-h-screen flex-col justify-between relative z-[1]'>
				<Head>
					<title>Next router</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content="Learn how to develop a tone of voice for your brand and use our template to get started."></meta>
				</Head>
				<Navbar />
				<main className="mb-auto">{children}</main>
				<Footer  />
				
			</main>
		</div>
	)
}

export default Layout;
// beams-pricing.png
