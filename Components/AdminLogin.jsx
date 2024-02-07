import {Link, useNavigate} from "react-router-dom"
import "../Styles/Adminlogin.css"
import { useState } from "react";
const AdiminLogin = () => {
    let [uname,setuname]=useState("")
    // console.log(uname);
    let [password,setPassword]=useState("")
    //  console.log(password);
     let navigate=useNavigate()


     let adminlogin=()=>{
        if(uname=='abcd' && password==1234){
            alert("login successful")
            navigate('/adminhomepage')
        }
        else{
            alert("Invalid credentials")
        }
     }
    return (  
        <div className="admin">
            <form action="">
                <label htmlFor="" >
                    UserName : <input className="in1" value={uname} onChange={(e)=>{setuname(e.target.value);}} type="text" placeholder="Enter username"/>
                </label>
                <br /><br />
                <label htmlFor="">
                    Password :<input className="in2" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Password" />
                </label>
                <br /><br />
                <button className="bt1" onClick={adminlogin}>Login</button>
                <br /><br />
                <span>Are you the New User ?<Link to="/adminsignup">Register</Link></span>
            </form>
            </div>
    );
}
 
export default AdiminLogin;