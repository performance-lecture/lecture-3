import React, {useState} from 'react'

function Tabs(props) {
	const [tab, setTab] = useState(0)
	return (
		<div className="Tabs">
			<div className="flex">
				{props.data.map((item, index) => (
					<div
						key={"tab-" + item.title}
						className={"flex-1 text-center py-2 px-1 font-semibold text-xl hover:bg-blue-100" + (tab === index ? ' bg-blue-200 text-blue-800 border-b-2 border-blue-800' : '')}
						onClick={() => {setTab(index)}}
					>
						{item.title}
					</div>
				))}
			</div>
			<div className="py-10">
				{props.data.map((item, index) => (
					<div key={"tab-content-" + item.title} className={tab === index ? '' : 'hidden'}>
						{item.content}
					</div>
				))}
			</div>
		</div>
	)
}

export default Tabs
