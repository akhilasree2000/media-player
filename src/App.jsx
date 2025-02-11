
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contents from './Pages/Contents'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import History from './Pages/History'

function App() {
 

  return (
    <>
    < Header/>
    <Routes>
      <Route element={< Contents/>} path='/'></Route>
      <Route element={< Home/>}  path='/home'></Route>
      <Route element={< History/>} path='/history'></Route>
    </Routes>
    < Footer/>
    </>
  )
}

export default App
