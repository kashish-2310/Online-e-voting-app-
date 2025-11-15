
import './App.css'
import Home from './components/pages/Home'
import Header from './components/pages/layout/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
 

  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
