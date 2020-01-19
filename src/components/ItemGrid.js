import React from 'react'

function ItemGrid(props) {
	const makeSrcset = (src) => {
		const _src = src.replace('.jpg', '')
		return (
			_src + '-675x844.jpg 675w,' +
			_src + '-540x675.jpg 540w,' +
			_src + '-240x300.jpg 240w,' +
			_src + '-819x1024.jpg 819w,' +
			_src + '.jpg 1280w'
		)
	}

	return (
		<ul className="ItemGrid flex flex-wrap justify-center items-end">
			{props.data.map((item) => (
				<li key={item.title} className="w-1/2 md:w-1/3 lg:w-1/4 text-center m-6">
					<a href={item.link} target="_blank">
						<div>
							<img src={item.image} srcSet={makeSrcset(item.image)} alt={item.title}/>
						</div>
						<h2 className="text-sm font-semibold pt-2 pb-1">{item.title}</h2>
						<div className="text-gray-600">{item.price}€</div>
					</a>
				</li>
			))}
		</ul>
	)
}

export default ItemGrid
