import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "../Styles/UserLogin.css"
const UserLogin = () => {
    let[uname,setUname]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()
     
    let userlogin=()=>{
        if(uname=="abcd" && password=="1234"){
              alert("user login succesfull")
              navigate("/userhomepage")
        }
        else{
            alert("Invalid credentials")
        }
    }

    return ( 
        <div className="user">
            {/* <h1>I am Userlogin page</h1> */}
            <form action="">
                <label htmlFor="">
                    UserName: <input type="text" value={uname} onChange={(e)=>{setUname(e.target.value)}} placeholder="Enter UserName"/>
                </label>
                <br /><br />
                <label htmlFor="">
                    password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" />
                </label>
                <br /><br />
                <button onClick={userlogin}>Login</button>
                <span>New User Registration: <Link to="/usersignup">Register</Link></span>
            </form>

        </div>
     );
}
 
export default UserLogin;