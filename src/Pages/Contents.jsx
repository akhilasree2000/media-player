import React from 'react'
import { Link } from 'react-router-dom'
import musicImg from "../assets/image7.gif"
import Card from 'react-bootstrap/Card';
import imageOne from "../assets/images3.jpg"
import imageTwo from "../assets/image6.jpg"
import imageThree from "../assets/image5.jpg"

function Contents() {
  return (
    <div className='container' style={{ marginTop: "130px", alignItems: "center" }}>
      <div className="row ">
        <div className="col-5">
          <h3>Welcome to  <span style={{ color: "red" }}>Media Player</span> </h3>
          <p style={{ textAlign: "justify" }}>A media player is a software application or device used to play multimedia files, including audio and video. It supports various file formats, provides playback controls (play, pause, stop, seek), and may include features like streaming, subtitles, playlists, and equalizer settings. Examples include VLC Media Player, Windows Media Player, and MX Player.</p>
          <Link to={"/home"} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={musicImg} alt="" />
        </div>
      </div>

      {/* features part */}

      <div>
        <h3 className='text-center' style={{ marginTop: "150px" }}>Features</h3>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imageOne} />
              <Card.Body>
                <Card.Title>Managing Vedios</Card.Title>
                <Card.Text>
                  Managing videos involves organizing, storing, editing, and sharing video files efficiently.
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imageTwo} />
              <Card.Body>
                <Card.Title>Categories Videos</Card.Title>
                <Card.Text>
                  A category video is a video that belongs to a specific group or genre based on its content, purpose, or audience.
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imageThree} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all vidios.
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* section3 */}

      <div className=' mt-5' style={{ border: "1px solid", borderRadius: "20px", padding: "25px" }}>
        <div className="row">
          <div className="col-6">
            <h3 style={{ marginTop: "100px" }}><span style={{ color: "red" }}>Simple, fast and powerful</span> </h3>
            <p style={{ textAlign: "justify" }}> <span style={{ fontSize: "20px" }}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quidem labore quaerat eius fugit odit quia minus officia eum assumenda. </p>
            <p style={{ textAlign: "justify" }}><span style={{ fontSize: "20px" }}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quidem labore quaerat eius fugit odit quia minus officia eum assumenda. </p>
            <p style={{ textAlign: "justify" }}><span style={{ fontSize: "20px" }}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quidem labore quaerat eius fugit odit quia minus officia eum assumenda. </p>
            <p style={{ textAlign: 'justify' }}><span style={{ fontSize: "20px" }}>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quidem labore quaerat eius fugit odit quia minus officia eum assumenda. </p>
          </div>
          <div className="col-6">
            <iframe style={{ marginTop: "100px", marginLeft: "60px" }} width="560" height="315" src="https://www.youtube.com/embed/JtrFzoL1joI?si=k36mXBBYHlh21h80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contents