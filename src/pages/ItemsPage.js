import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BannerImage from '../components/BannerImage'
import ItemGrid from '../components/ItemGrid'
import main_items from '../assets/main-items.jpg'

function ItemsPage(props) {
	const [items, setItems] = useState([])

	const getItems = () => {
		axios.get('http://localhost:3001/items')
			.then((success) => {
				console.log(success.data)
				setItems(success.data)
			})
	}

	useEffect(() => {
		getItems()
	}, [])

	return (
		<div className="ItemsPage -mt-16">
			<BannerImage
				text={'Items'}
				image={main_items}
			/>
			<div className="container mx-auto py-24">
				<ItemGrid
					data={items}
				/>
			</div>
		</div>
	)
}

export default ItemsPage
