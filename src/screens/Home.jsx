import React from 'react'
import MainCarousel from '../customer/components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../customer/components/HomeSectionCard/HomeSectionCarousel'
import { mens_kurta } from '../data/mens_kurta'

const Home = () => {
  return (
    <div>
        <MainCarousel />
        <HomeSectionCarousel data={mens_kurta} title="Mens Kurta" />
        <HomeSectionCarousel data={mens_kurta} title="Womens Kurta" />
        <HomeSectionCarousel data={mens_kurta} title="Mens Shirt" />
        <HomeSectionCarousel data={mens_kurta} title="Womens Dress" />
        <HomeSectionCarousel data={mens_kurta} title="Child dress" />
    </div>
  )
}

export default Home
