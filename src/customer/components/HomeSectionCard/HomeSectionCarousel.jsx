import React from 'react'
import HomeSectionCard from './HomeSectionCard';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeSectionCarousel({data,title}) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    
    <button
      {...props}
      className={
        "slick-prev slick-arrow bg-white " +
        (currentSlide === 0 ? " slick-disabled" : ""+currentSlide) 
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <KeyboardArrowLeft sx={{color:'#000'}} />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 5.5 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 5.5 ? true : false}
      type="button"
    >
      <KeyboardArrowRight sx={{color:'#000'}} />
    </button>
  );
  var settings = {
    dots: false,
    infinite: false,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />
  };


  return (
    <>
      <div className=' px-4 lg:px-8'>
        <h2 className=' text-2xl font-bold text-left p-8 '>{title}</h2>
        <div className=' md:p-5 sm:p-2'>
          <Slider {...settings}>
            {data && data.slice(0,15).map((item,index) =>{
                return <HomeSectionCard key={index} product={item} />
              })
            }
          </Slider>
        </div>
      </div>
    </>

  )
}

export default HomeSectionCarousel
