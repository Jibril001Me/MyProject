
import { Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Trailer from './Pages/Trailer'
import Vies from './Pages/Vies'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/trailer/:id" element={<Trailer />} />
    <Route path="/Vies" element={<Vies/>}/>
    </Routes>
 
    </>
  )
}

export default App
