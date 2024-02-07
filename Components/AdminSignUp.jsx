import { useState } from "react";
import axios from 'axios'
import "../Styles/Adminsignup.css"
const AdminSignUp = () => {
    let[name,setName]=useState("")
    // console.log(name);
    let[dob,setDob]=useState("")
    let[email,setEmail]=useState("")
    let[phoneno,setPhoneno]=useState("")
    let[password,setPassword]=useState("")
    let data=[name,dob,email,phoneno,password]
    let addAdmin=(e)=>{
        e.preventDefault()//to stop refreshing every time
        axios.post("http://localhost:1000/Admin",data)
        .then((res)=>{
            console.log(res);
            alert("Data added Succesfully")
        })
        .catch((err)=>{
           console.log(err);
           alert("Invalid Successfully")
        })

    }
    return (  
       
            <form action="" className="form1" onSubmit={addAdmin}>
                <label htmlFor="">
                    Name: <input className="idd1" type="text" placeholder="Enter the User Name" value={name} onChange={(e)=>{setName(e.target.value)}} required />
                </label>
                <br />
                <label htmlFor="">
                    DOB: <input className="idd2" type="date" placeholder="Enter DOB" value={dob} onChange={(e)=>{setDob(e.target.value)}} required />
                </label>
                <br />
                <label htmlFor="">
                    Email: <input className="idd3" type="email" placeholder="Enter the Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                </label>
                <br />
                <label htmlFor="">
                     Phone no: <input className="idd4" type="tel" pattern="[6789][0-9]{9}" placeholder="Enter phone no" value={phoneno} onChange={(e)=>{setPhoneno(e.target.value)}} required/>
                </label>
                <br />
                <label htmlFor="">
                    Password: <input className="idd5" type="password" placeholder="Enter the password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                </label>
                <br />
                <button className="btt1">Register</button>


            </form>
           
       
    );
}
 
export default AdminSignUp;