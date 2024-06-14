import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Navbar/>}></Route>
          <Route path='profile'>
            <Route index path='user' element={ <Navbar/>}></Route>
            <Route path='details' element={ <Navbar/>}></Route>
          </Route>
          <Route path='setting'>
            <Route index path='account' element={ <Navbar/>}></Route>
            <Route path='security'>
              <Route index path='login' element={ <Navbar/>}></Route>
              <Route path='register' element={ <Navbar/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
