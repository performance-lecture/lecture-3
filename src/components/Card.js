import React, { useEffect, useRef } from 'react'

function Card(props) {
  const imgRef = useRef(null);

  useEffect(() => {
    const options = {};
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          console.log('is intersecting', entry.target.dataset.src);
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(imgRef.current);
  }, [])

	return (
		<div className="Card text-center">
			<img data-src={props.image} ref={imgRef}/>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
