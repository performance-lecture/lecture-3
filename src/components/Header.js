import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

function Header(props) {
	const [isOpened, setIsOpened] = useState(false)

	const toggleSidebar = () => {
		setIsOpened(!isOpened)
	}

	return (
		<>
			<section className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-30 h-16 items-center">
				<div className="w-full max-w-screen-xl relative mx-auto px-6">
					<div className="flex items-center -mx-6">

						<div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
							<div className="flex items-center">
								<a href="/" className="block lg:mr-4 flex-shrink-0">
									<img src={logo} className="w-10" alt='logo'/>
								</a>
								<h2 className="ml-3 text-xl">Longboard</h2>
							</div>
						</div>

						<div className="flex flex-grow lg:w-3/4 xl:w-4/5 justify-end">
							<button onClick={toggleSidebar} className="flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700">
								<svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
								</svg>
							</button>
							<div className="hidden lg:flex lg:items-center lg:justify-between px-6">
								<div className="flex justify-start items-center text-gray-500">
									<Link className="block flex items-center hover:text-gray-700 mr-5" to={'/'} >
										Main
									</Link>
									<Link className="block flex items-center hover:text-gray-700 mr-5" to={'/items'} >
										Items
									</Link>
									<Link className="block flex items-center hover:text-gray-700 mr-5" to={'/part'}>
										Part of Board
									</Link>
									<Link className="block flex items-center hover:text-gray-700" to={'/riding-styles'}>
										Riding Styles
									</Link>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			<div className={'fixed top-0 right-0 h-full w-full sm:w-64 bg-white text-center border-l z-40 sm:text-left ' + (isOpened ? '' : 'hidden')}>
				<div className='flex flex-col p-3 text-gray-700 text-xl lg:text-2xl'>
					<div className='text-right'>
						<button onClick={toggleSidebar}>
							<svg className="fill-current w-5 h-5 ml-auto text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
							</svg>
						</button>
					</div>
					<Link onClick={toggleSidebar} className="border-b p-3" to={'/'} >Main</Link>
					<Link onClick={toggleSidebar} className="border-b p-3" to={'/items'} >Items</Link>
					<Link onClick={toggleSidebar} className="border-b p-3" to={'/part'} >Part of Board</Link>
					<Link onClick={toggleSidebar} className="p-3" to={'/riding-styles'} >Riding Styles</Link>
				</div>
			</div>
		</>
	)
}



export default Header
