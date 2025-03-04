import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Allvideios from '../Components/Allvideios'
import Addcategories from '../Components/Addcategories'

const Home = () => {
  const [videoResponse,setvideoResponse]=useState("")
  const [videoDeletedResponse,setvideoDeletedResponse]=useState("")
  const [categoryvideoDeletedResponse,setcategoryvideoDeletedResponse]=useState("")

  return (
    <div className='container'>
    <div className='d-flex justify-content-between py-5 '>
      <div>
        < Add setVedioResp={setvideoResponse} />
      </div>
      <div>
        <Link to={'/history'}>Watch History</Link>
      </div>
    </div>
    <div className='d-flex justify-content-between py-5 '>
      <div>
       < Allvideios videoResp={videoResponse} videoDeletedResponse={videoDeletedResponse} setcategoryvideoDeletedResponse={setcategoryvideoDeletedResponse} />
      </div>
      <div>
        < Addcategories setvideoDeletedResponse={setvideoDeletedResponse} categoryvideoDeletedResponse={categoryvideoDeletedResponse}/>
      </div>
    </div>
  </div>
)
}

export default Home