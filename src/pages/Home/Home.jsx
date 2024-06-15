import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { helix } from 'ldrs'
import { foodStoreContext } from '../../context/StoreContext'


// Default values shown

const Home = () => {
  const [category, setCategory] = useState("All")
  const [timer, setTimer] = useState(false)
  const {count, setCount} = useContext(foodStoreContext)
  helix.register()
  useEffect(() => {
    const loading = setTimeout(() => {
      setCount(prev => prev + 1)
      setTimer(true)
    }, 1500);
    return () => {clearTimeout(loading) 
      setTimer(false)}
  }, [])
  return (
    <div>
      {
        !timer && count === 0 ? (
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