import React from 'react'
import Banner from '../components/Banner'
import ThreeColumns from '../components/ThreeColumns'
import Card from '../components/Card'
import main1 from '../assets/main1.jpg'
import main2 from '../assets/main2.jpg'
import main3 from '../assets/main3.jpg'

function MainPage(props) {

	return (
		<div className="MainPage -mt-16">
			<Banner/>
			<div className="container mx-auto">
				<ThreeColumns
					columns={[
						<Card image={main1}>롱보드는 아주 재밌습니다.</Card>,
						<Card image={main2}>롱보드를 타면 아주 신납니다.</Card>,
						<Card image={main3}>롱보드는 굉장히 재밌습니다.</Card>
					]}
				/>
			</div>
		</div>
	)
}

export default MainPage
