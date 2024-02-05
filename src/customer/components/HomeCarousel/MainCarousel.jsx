import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import mainCarousel from './MainCarouselData';

function MainCarousel() {
    const items = mainCarousel.map((item)=>{
        return (
            <img className=' cursor-pointer ' role='presentation' src={item.url} alt={item.alt} />
        )
    })
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
    />
  )
}

export default MainCarousel
