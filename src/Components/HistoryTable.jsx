import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { getAllHistory } from '../Services/AllAPI';
import { deleteHistory } from '../Services/AllAPI';
const HistoryHeading = () => {
  const [historyData, setHistoryData] = useState({});

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    try {
      let apiresponse = await getAllHistory();
      setHistoryData(apiresponse.data);
    } catch (error) {
      console.log(error);

    }
  }

  // delete

  const onDeleteClick=async (id) => {
    try{
      await deleteHistory(id)
      getHistory()
    }catch(error){
      console.error(error);
      
    }
  }

  return (
    <>
      <div className='d-flex justify-content-between mt-5' >
        <div>
          <h1 className='fw-bold' style={{ letterSpacing: '2px' }}>Watch History</h1>
        </div>
        <div>
          <Link to={'/home'} style={{ color: 'orange' }} className='fw-bold'><i className="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
        </div>
      </div>

      {/* table content */}

      <div style={{ margin: '50px 0px' }}>
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
            {
              historyData.length>0? historyData.map((value,index)=>(
            <tr key={index}>
              <td >{index+1}</td>
              <td>{value.caption}</td>
              <td><Link to={`https://www.youtube.com/watch?v=${value.videoURL}`}>https://www.youtube.com/watch?v=${value.videoURL}</Link></td>
              <td>{value.formatedDate}</td>
               <button onClick={()=>onDeleteClick(value.id)} className="btn" ><i className="fa-solid fa-trash text-danger" style={{ cursor: 'pointer' }}></i></button>
            </tr>
              )) :<div className="mt-3 border border-5 border-danger p-2 text-center">Not History Found</div>
            }
           
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default HistoryHeading