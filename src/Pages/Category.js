import {useEffect, useState} from 'react'
import utils from '../utils/animeAPI.js'



const Category = () => {
  
  const [category, setCategory] = useState([])
  

  useEffect(()=> {
    utils
    .CategoryAPI()
    .then((res) => {
      setCategory([...res])
    })
  })
  
  
  
  return (
    <div>
      
    </div>
  )
}

export default Category
