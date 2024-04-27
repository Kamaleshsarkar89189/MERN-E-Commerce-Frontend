import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProdut from '../components/BannerProdut'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VertiicalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProdut/>
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Popular's Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={" Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera"}/>
      <VerticalCardProduct category={"earphones"} heading={"Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerators"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
      <VerticalCardProduct category={"printers"} heading={"Printers"}/>
      <VerticalCardProduct category={"processor"} heading={"Processors"}/>

    </div>
  )
}

export default Home