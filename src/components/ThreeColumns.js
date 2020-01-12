import React from 'react'

function ThreeColumns(props) {
	return (
		<div className="ThreeColumns my-16">
			<div className="flex">
				<div className="flex-1 m-8 ml-32">
					{props.columns[0]}
				</div>
				<div className="flex-1 m-8">
					{props.columns[1]}
				</div>
				<div className="flex-1 m-8 mr-32">
					{props.columns[2]}
				</div>
			</div>
		</div>
	)
}

export default ThreeColumns
