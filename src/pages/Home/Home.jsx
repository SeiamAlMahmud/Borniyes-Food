import React, { useEffect, useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { helix } from 'ldrs'


// Default values shown

const Home = () => {
  const [category, setCategory] = useState("All")
  const [timer, setTimer] = useState(false)
  helix.register()
  useEffect(() => {
    const loading = setTimeout(() => {
      setTimer(true)
    }, 1500);
    return () => {clearTimeout(loading) 
      setTimer(false)}
  }, [])
  return (
    <div>
      {
        !timer ? (
          <div className='loading'>
          <l-helix
            size="80"
            speed="2.5"
            color="#800000"
            ></l-helix>
            </div>
        ) : (
          <>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload />
          </>
        )
      }


    </div>
  )
}

export default Home