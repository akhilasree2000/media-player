
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contents from './Pages/Contents'
import Home from './Pages/Home'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import History from './Pages/History'

function App() {
 

  return (
    <>
    < Header/>
    <Routes>
      <Route element={< Contents/>} path='/content'></Route>
      <Route element={< Home/>}  path='/home'></Route>
      <Route element={< History/>} path='/history'></Route>
    </Routes>
    < Footer/>
    </>
  )
}

export default App
