import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Allvideios from '../Components/Allvideios'
import Addcategories from '../Components/Addcategories'

const Home = () => {
  return (
    <div className='container'>
    <div className='d-flex justify-content-between py-5 '>
      <div>
        < Add/>
      </div>
      <div>
        <Link to={'/history'}>Watch History</Link>
      </div>
    </div>
    <div className='d-flex justify-content-between py-5 '>
      <div>
       < Allvideios/>
      </div>
      <div>
        < Addcategories/>
      </div>
    </div>
  </div>
)
}

export default Home