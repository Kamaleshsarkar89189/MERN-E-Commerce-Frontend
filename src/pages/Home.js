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
      <VerticalCardProduct category={"televisions"} heading={" Mouse"}/>
      <VerticalCardProduct category={"camera"} heading={" Mouse"}/>
      <VerticalCardProduct category={"earphones"} heading={" Mouse"}/>
      <VerticalCardProduct category={"speakers"} heading={" Mouse"}/>
      <VerticalCardProduct category={"refrigerator"} heading={" Mouse"}/>
      <VerticalCardProduct category={"trimmers"} heading={" Mouse"}/>
      <VerticalCardProduct category={"printers"} heading={" Mouse"}/>
      <VerticalCardProduct category={"processor"} heading={" Mouse"}/>

    </div>
  )
}

export default Home