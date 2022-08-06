import React, { useEffect, useRef } from 'react'

function Card(props) {
  const imgRef = useRef(null)

  useEffect(() => {
    const options = {}
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const target = entry.target;
          const previousSibling = target.previousSibling;

          console.log('is intersecting', entry.target.dataset.src);
          target.src = target.dataset.src;
          previousSibling.srcset = previousSibling.dataset.srcset;
          observer.unobserve(entry.target)
        }
      })
    }
    
    const observer = new IntersectionObserver(callback, options)

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [])

	return (
		<div className="Card text-center">
      <picture>
        <source data-srcset={props.webp} type="image/webp" />
        <img data-src={props.image} ref={imgRef} />
      </picture>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
