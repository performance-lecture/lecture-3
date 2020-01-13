import React from 'react'

function ImagesWithTitle(props) {
	return (
		<div className="ImagesWithTitle py-20" style={{backgroundColor: props.bgColor}}>
			<div className="container mx-auto">
				<div className="text-center text-4xl font-semibold text-gray-800 mb-3">{props.title}</div>
				{props.images.map((img) => (
					<div key={img}><img src={img} className="w-full lg:w-9/12 mx-auto"/></div>
				))}
			</div>
		</div>
	)
}

export default ImagesWithTitle
