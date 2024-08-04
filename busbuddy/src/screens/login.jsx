import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"



function Login()
{
    const navigate = useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const onLogin =()=>{
       
             
            if(email.length==0)
            {
                toast.error("Enter email")
            }
            else if(password.length==0)
            {
                toast.error("Enter password")
            }   
            else{
                toast.success("Logged in successfull")
                
                navigate('/home')
            }
    }
    return(
        <div>
            <h1 className="page-header">Login</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col mb-3">
                    <div className="form">

                    <div className="mb-3">
                        <label htmlFor="" className="">Email</label>
                        <input 
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="">Password</label>
                        <input 
                        onChange={(e)=>setPassword(e.target.value)}
                        type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                    <div>New User? <Link to="/register">Register</Link></div>
                    <button onClick={onLogin} className="btn btn-success mb-3">Login</button>

                    </div>
                                       
                    </div>
                    

                </div>
                <div className="col"></div>
            </div>
    
        </div>
    )
}
export default Login