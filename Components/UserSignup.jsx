import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Styles/Usersignup.css"
const UserSignup = () => {
    let[name,setName]=useState("")
    // console.log(name);
    let[dob,setDob]=useState("")
    let[email,setEmail]=useState("")
    let[phoneno,setPhoneno]=useState("")
    let[password,setPassword]=useState("")
    let data=[name,dob,email,phoneno,password]
    
    let usersignupmetod=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/Admin",data)
        .then((res)=>{
            console.log(res);
            alert("data added successfully")

        })
        .catch((err)=>{
          console.log(err);
          alert("Data not added")
        })

    }
    return (  
        <div className="usersignup">
            {/* <h1>Usersignup</h1> */}
            <form action="" onSubmit={usersignupmetod} className="form2">
                <label htmlFor="">
                    Name: <input className="iddd1" type="text" placeholder="EnterName" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                </label>
                <br />
                <label htmlFor="">
                    DOB: <input className="iddd2" type="date" placeholder="Enter DOB" value={dob}  onChange={(e)=>{setDob(e.target.value)}} required/>
                </label>
                <br />
                <label htmlFor="">
                    Email: <input className="iddd3" type="email" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                </label>
                <br />
                <label htmlFor="">
                    PhoneNum: <input className="iddd4" type="tel" placeholder="Enter Phone num" value={phoneno} onChange={(e)=>{setPhoneno(e.target.value)}} required/>
                </label>
                <br />
                <label htmlFor="">
                    Password: <input  className="iddd5" type="password"  placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                </label>
                <br />
                <button className="bttt1" >Submit</button>
            </form>
        </div>
    );
}
 
export default UserSignup;