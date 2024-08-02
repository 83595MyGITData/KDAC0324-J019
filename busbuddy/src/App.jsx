
import {Route, Routes} from 'react-router-dom'
import  { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './screens/login';
import Register from './screens/register';
import Customer from './screens/Customer'; 
function App() {
  return (
    <div>
      <h1 className="page-header" style={{background:"blue",height:50,color:"white",textAlign:"start"}}>BusBuddy
        </h1>
      <Routes>
      <Route path='' element={<Customer/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      
      </Routes>
      <ToastContainer/>
      {/* <h1 className="page-header" style={{background:"blue",height:50}}>Designed by PASS Group
    </h1> */}
      </div>
  )
}

export default App;
