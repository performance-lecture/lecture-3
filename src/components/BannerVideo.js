import React from 'react'
import video_webm from '../assets/_banner-video.webm'
import video from '../assets/_banner-video.mp4'

function BannerVideo() {
	return (
		<div className="BannerVideo w-full h-screen overflow-hidden relative bg-texture">
			<div className="absolute h-screen w-full left-1/2">
        <video
          className="absolute translateX--1/2 h-screen max-w-none min-w-screen -z-1 bg-black min-w-full min-h-screen" 
          autoPlay 
          loop 
          muted
        >
          <source src={video_webm} type="video/webm" />
          <source src={video} type="video/mp4" />
        </video>
			</div>
			<div className="w-full h-full flex justify-center items-center">
				<div className="text-white text-center">
					<div className="text-6xl leading-none font-semibold">KEEP</div>
					<div className="text-6xl leading-none font-semibold">CALM</div>
					<div className="text-3xl leading-loose">AND</div>
					<div className="text-6xl leading-none font-semibold">RIDE</div>
					<div className="text-5xl leading-tight font-semibold">LONGBOARD</div>
				</div>
			</div>
		</div>
	)
}

export default BannerVideo
