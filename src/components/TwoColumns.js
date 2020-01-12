import React from 'react'

function TwoColumns(props) {
	return (
		<div className="TwoColumns py-16" style={{backgroundColor: props.bgColor}}>
			<div className={"flex flex-col sm:flex-row container mx-auto" + (props.mobileReverse ? " flex-col-reverse" : "")}>
				<div className="flex-1 sm:my-8 sm:ml-4 sm:mr-2 lg:ml-6 lg:mr-6 flex items-center">
					{props.columns[0]}
				</div>
				<div className="flex-1 sm:my-8 sm:mr-4 sm:ml-2 lg:mr-6 lg:ml-6 flex items-center">
					{props.columns[1]}
				</div>
			</div>
		</div>
	)
}

export default TwoColumns
