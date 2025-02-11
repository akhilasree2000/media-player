import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-5 '>
      <div className="row">
        <div className="col-3">
        <i style={{marginLeft:"80px"}} className="fa-solid fa-music " ><span style={{marginLeft:"20px"}}>Media Player</span></i>
         <p style={{marginLeft:"80px", marginTop:"10px", textAlign:"justify"}}>Designed and built with all the love in the wold by the Luminar team with the help of our contributors.</p>
         <p style={{marginLeft:"80px", marginTop:"10px"}}>Code licensed Luminar,does CC BY 3.0</p>
         <p style={{marginLeft:"80px", marginTop:"10px"}}>Currently V5.3.2.0</p>
        </div>
        <div className="col-3 mt-2">
          <h5 style={{marginLeft:"200px"}} >Links</h5>
          <Link style={{textDecoration:"none",marginLeft:"200px", color:"white"}} to={"/Content"}>Landing Page</Link><br />
         <Link style={{marginLeft:"200px", textDecoration:"none",color:"white"}} to={"/home"}>Home Page</Link><br />
           <Link style={{marginLeft:"200px", textDecoration:"none", color:"white"}} to={"/history"}>History Page</Link>
        </div>
        <div className="col-3 mt-2">
          <h5 style={{marginLeft:"90px"}}>Guides</h5>
          <div style={{marginLeft:"90px"}}>React</div>
          <div style={{marginLeft:"90px"}}>React Router</div>
          <div style={{marginLeft:"90px"}}>React Bootstrap</div>
        </div>
        <div className="col-3">
        <h5 style={{marginLeft:"20px"}}>Contact</h5>
        <input style={{padding:"3px", borderRadius:"10px"}} type="text" placeholder='Enter Your Email Here!!' />
       <button
              className="btn   text-white"
              style={{ backgroundColor: "#6B46C1", marginLeft:"20px"}}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
        <div className='mt-3'>
        <i className="fa-brands fa-twitter"></i>
        <i style={{marginLeft:"20px"}} className="fa-brands fa-instagram"></i>
        <i style={{marginLeft:"20px"}}  className="fa-brands fa-facebook"></i>
        <i style={{marginLeft:"20px"}}  className="fa-brands fa-linkedin"></i>
        <i style={{marginLeft:"20px"}}  className="fa-brands fa-github"></i>
        <i  className="fa-solid fa-phone" style={{color:"white", marginLeft:"20px"}}></i>
        </div>
        </div>
      </div>
      <div>
        <p style={{textAlign:"center", marginTop:"20px"}}>Copyright @ July 2024 batch, Media Player App. Built with React</p>
      </div>
    </div>
    
  )
}

export default Footer