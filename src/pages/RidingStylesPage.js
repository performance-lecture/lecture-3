import React from 'react'

import Tabs from '../components/Tabs'
import BannerImage from '../components/BannerImage'
import YoutubePlayer from '../components/YoutubePlayer'
import main_styles from '../assets/main-styles.jpg'

function RidingStylesPage(props) {
	const opts = {
		width: '100%',
		height: '100%',
		playerVars: {
			autoplay: 1
		}
	};

	const DATA = [
		{
			title: "댄싱",
			content: (
				<YoutubePlayer id='0BwkZLJI-PI'/>
			)
		},
		{
			title: "프리스타일",
			content: (
				<YoutubePlayer id='ybBMXQX_1_w'/>
			)
		},
		{
			title: "다운힐",
			content: (
				<YoutubePlayer id='Qwim07syZgQ'/>
			)
		},
		{
			title: "프리라이딩",
			content: (
				<YoutubePlayer id='rO9wGssc3Dk'/>
			)
		}
	]


	return (
		<div className="RidingStylesPage -mt-16">
			<BannerImage
				text={'Riding Styles'}
				image={main_styles}
			/>
			<div className="container py-16 mx-auto">
				<Tabs data={DATA}/>
			</div>
		</div>
	)
}

export default RidingStylesPage
