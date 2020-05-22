import React from 'react'
import BannerImage from '../components/BannerImage'
import ImagesWithTitle from '../components/ImagesWithTitle'
import main_parts from '../assets/main-parts.jpg'
import deck1 from '../assets/part/deck1.jpg'
import deck2 from '../assets/part/deck2.jpg'
import truck1 from '../assets/part/truck1.webp'
import wheel1 from '../assets/part/wheel1.png'
import wheel2 from '../assets/part/wheel2.jpg'
import etc1 from '../assets/part/etc1.jpg'
import etc2 from '../assets/part/etc2.jpg'
import etc3 from '../assets/part/etc3.jpg'

function PartPage(props) {
	return (
		<div className="PartPage -mt-16">
			<BannerImage
				text={'Parts of Longboard'}
				image={main_parts}
			/>
			<div className="container mx-auto">
				<ImagesWithTitle
					title="덱 (Deck)"
					images={[deck1, deck2]}
					bgColor={'none'}
				/>
				<ImagesWithTitle
					title="트럭 (Truck)"
					images={[truck1]}
					bgColor={'none'}
				/>
				<ImagesWithTitle
					title="휠 (Wheel)"
					images={[wheel1, wheel2]}
					bgColor={'none'}
				/>
				<ImagesWithTitle
					title="기타 부품 (ETC)"
					images={[etc1, etc2, etc3]}
					bgColor={'none'}
				/>
			</div>
		</div>
	)
}

export default PartPage
