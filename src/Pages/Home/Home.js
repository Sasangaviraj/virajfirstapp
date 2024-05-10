import { useState } from "react"
import Ads from "./Ads"
import Products from "./Products"
import Loading from "../../components/Loading/Loading"


const Home = () => {
  const [loading,setLoading] =useState(false)


  if(loading) return <Loading/>;
  

  
  return (
    <div className=" px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <Ads />
      <Products title="Trending Products"     />
      <Products title="Rose Velvet Perfume"   />
      <Products title="Velvet Rose Soap"      />
    </div>
  )
}

export default Home;
