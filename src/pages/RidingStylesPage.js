import React from 'react'
import Tabs from '../components/Tabs'
import BannerImage from '../components/BannerImage'
import main_styles from '../assets/main-styles.jpg'

function RidingStylesPage(props) {
	const DATA = [
		{
			title: "댄싱",
			content: "111릭ㅁㄴ이라ㅓㅁㄴ이ㅏ 미낭리마너이머 ㄴ이라ㅓㅁ니ㅏㅇ리ㅏ먼ㅇㄹ"
		},
		{
			title: "트릭",
			content: "22릭ㅁㄴ이라ㅓㅁㄴ이ㅏ 미낭리마너이머 ㄴ이라ㅓㅁ니ㅏㅇ리ㅏ먼ㅇㄹ"
		},
		{
			title: "다운힐",
			content: "3릭ㅁㄴ이라ㅓㅁㄴ이ㅏ 미낭리마너이머 ㄴ이라ㅓㅁ니ㅏㅇ리ㅏ먼ㅇㄹ"
		},
		{
			title: "프리라이딩",
			content: "444444릭ㅁㄴ이라ㅓㅁㄴ이ㅏ 미낭리마너이머 ㄴ이라ㅓㅁ니ㅏㅇ리ㅏ먼ㅇㄹ"
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
