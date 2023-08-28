import { Fragment, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Component:
import Image from 'next/image';
import Container from '../ui/Container';

const Navbar = () => {

	console.log('Component Navbar Re-Render');

	const router = useRouter();
	const menuDrop = useRef(null);
	const [ menu, setMenu ] = useState(false);

	const navEffectHandler = (elem) => {
		elem.classList.add('!text-slate-100');
		menuDrop.current.setAttribute('style', `
			--block-left: ${elem.offsetLeft}px;
			--block-width: ${elem.clientWidth}px;
			opacity: 1;
			visibility: visible
		`);
	}
	
	// For Navbar Menu Effects
	useEffect(() => {

		const navMenu = document.querySelector("#nav-menu");
		const listItem = document.querySelectorAll("#nav-menu ul li a");
		
		listItem.forEach((e) => {
			
			e.addEventListener("mouseenter", function () {
				navEffectHandler(e)
			});

			e.addEventListener("mouseleave", function () {
				e.classList.remove('!text-slate-100');
			});

			navMenu.addEventListener("mouseleave", function () {
				e.href.includes(router.pathname) ? navEffectHandler(e) : e.classList.remove('!text-slate-100');
			})

			e.href.includes(router.pathname) ? navEffectHandler(e) : e.classList.remove('!text-slate-100');

		});
		
	}, [router]);

	// e.href.includes(router.pathname)

	return (
		<Fragment>
			<nav className="py-3 md:py-4 xl:py-5 3xl:py-6 backdrop-blur-md bg-black/20 sticky top-0 z-10 border-b border-cyan-400 border-opacity-20">
				<Container>
					<div className="flex items-center justify-between">
						<Link href="/">
							<Image
								className="w-24 md:w-28 xl:w-32 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
								src="/next.svg"
								alt="Logo Brand"
								width={180}
								height={37}
								priority
							/>
						</Link>

						<div className="flex items-center">
							<div className="hidden lg:block relative" id="nav-menu">
								
								<ul className="flex font-semibold relative z-10">
									<li>
										<Link href="/shop">shop</Link>
									</li>
									<li>
										<Link href="/news">news</Link>
									</li>
									<li>
										<Link href="/events">events</Link>
									</li>
									<li>
										<Link href="/about">about</Link>
									</li>
									<li>
										<Link href="/contact">contact</Link>
									</li>
									<li>
										<Link href="/blog">blog</Link>
									</li>
								</ul>
								<div ref={menuDrop} id="menu-backdrop"></div>
							</div>

							<span className='opacity-40 ml-2 mr-3 hidden lg:block'>|</span>

							<div className="flex gap-x-1 justify-center">
								<button className="p-2 hover:bg-cyan-400 hover:bg-opacity-10 border-[1.5px] border-cyan-400 border-opacity-0 hover:border-opacity-40 rounded-full ease-in-out duration-300 ">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
									</svg>
									<span className="sr-only">Shop Button</span>
								</button>

								<button className="p-2 hover:bg-cyan-400 hover:bg-opacity-10 border-[1.5px] border-cyan-400 border-opacity-0 hover:border-opacity-40 rounded-full ease-in-out duration-300 ">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
									</svg>
									<span className="sr-only">Profile Button</span>
								</button>

								<button onClick={() => setMenu(true)} className="p-2 hover:bg-cyan-400 hover:bg-opacity-10 border-[1.5px] border-cyan-400 border-opacity-0 hover:border-opacity-40 rounded-full ease-in-out duration-300 lg:hidden">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
									</svg>
									<span className="sr-only">Burger Menu Button</span>
								</button>
							</div>
						</div>
					</div>
				</Container>
			</nav>

			<aside className={`bg-slate-950 fixed h-full w-full max-w-[350px] z-20 px-4 py-6 shadow-lg ease-in-out duration-500 ${menu ? 'right-0' : '-right-full'}`} id="mobile-menu">
				<div className="flex px-4 justify-between items-center mb-3">
					<p className="text-lg uppercase font-bold">Menu</p>
					<button onClick={() => setMenu(false)} className="stroke-slate-400 hover:stroke-cyan-400 ease-in-out duration-200">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						<span className="sr-only">Close Menu Button</span>
					</button>
				</div>
				<ul className="flex flex-col uppercase font-semibold z-10">
					<li>
						<Link onClick={() => setMenu(false)} href="/shop" className='bg-cyan-400 bg-opacity-0 hover:bg-opacity-10 border-[1.5px] border-opacity-0 border-cyan-400 hover:border-opacity-40 block py-3 px-4 rounded-md ease-in-out duration-300'>shop</Link>
					</li>
					<li>
						<Link onClick={() => setMenu(false)} href="/news" className='bg-cyan-400 bg-opacity-0 hover:bg-opacity-10 border-[1.5px] border-opacity-0 border-cyan-400 hover:border-opacity-40 block py-3 px-4 rounded-md ease-in-out duration-300'>news</Link>
					</li>
					<li>
						<Link onClick={() => setMenu(false)} href="/events" className='bg-cyan-400 bg-opacity-0 hover:bg-opacity-10 border-[1.5px] border-opacity-0 border-cyan-400 hover:border-opacity-40 block py-3 px-4 rounded-md ease-in-out duration-300'>events</Link>
					</li>
					<li>
						<Link onClick={() => setMenu(false)} href="/about" className='bg-cyan-400 bg-opacity-0 hover:bg-opacity-10 border-[1.5px] border-opacity-0 border-cyan-400 hover:border-opacity-40 block py-3 px-4 rounded-md ease-in-out duration-300'>about</Link>
					</li>
					<li>
						<Link onClick={() => setMenu(false)} href="/contact" className='bg-cyan-400 bg-opacity-0 hover:bg-opacity-10 border-[1.5px] border-opacity-0 border-cyan-400 hover:border-opacity-40 block py-3 px-4 rounded-md ease-in-out duration-300'>contact</Link>
					</li>
					<li>
						<Link onClick={() => setMenu(false)} href="/blog" className='bg-cyan-400 bg-opacity-0 hover:bg-opacity-10 border-[1.5px] border-opacity-0 border-cyan-400 hover:border-opacity-40 block py-3 px-4 rounded-md ease-in-out duration-300'>blog</Link>
					</li>
				</ul>
			</aside>
			
			<div onClick={() => setMenu(false)} className={`fixed backdrop-blur-sm bg-black/20 top-0 left-0 h-full w-full z-10 ${menu ? 'z-10' : 'z-[-9]'} ease-in-out duration-300`} ></div>
		</Fragment>
	)
}

export default Navbar
