import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const HistoryHeading = () => {
  return (
    <>
    <div className='d-flex justify-content-between mt-5' >
        <div>
            <h1 className='fw-bold' style={{letterSpacing:'2px'}}>Watch History</h1>
        </div>
        <div>
            <Link to={'/home'} style={{color:'orange'}} className='fw-bold'><i className="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
        </div>
    </div>
  
    {/* table content */}
    
    <div style={{margin:'50px 0px'}}>
      <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Time Stamp</th>
          <th><i className="fa-solid fa-ellipsis"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <i className="fa-solid fa-trash text-danger" style={{cursor:'pointer'}}></i>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default HistoryHeading