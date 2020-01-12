import React from 'react'
import {Link} from 'react-router-dom'

function Meta(props) {
	return (
		<div className="Meta p-6 sm:p-0">
			<div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
				{props.title}
			</div>
			<div className="text-sm md:text-lg lg:text-xl font-light">
				{props.content}
			</div>
			<div className="text-left mt-4">
				<Link to={props.btnLink} className="py-2 px-4 border border-black outline-none rounded inline-flex items-center">
					<span>보러가기</span>
					<svg className="fill-current w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"/>
					</svg>
				</Link>
			</div>
		</div>
	)
}

export default Meta
