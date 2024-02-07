import "../Styles/Adminedit.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const Adminedit = () => {
    let param=useParams()
    let[title,setTitle]=useState("")
    let[description,setDescription]=useState("")
    let[vediourl,setVediourl]=useState("")
    let[likes,setLikes]=useState("")
    let[views,setViews]=useState("")
     
    useEffect(()=>{
       axios.get(`http://localhost:1000/ Vedio/${param.id}`)
       .then((res)=>{
             console.log(res.data);
             setTitle(res.data.title)
             setDescription(res.data.description)
             setLikes(res.data.likes)
             setVediourl(res.data.vediourl)
             setViews(res.data.views)
             
       })
       .catch((err)=>{
        console.log(err);
       })
      
    },[])
    let data={title,description,views,likes,vediourl}
    let submitedit=(e)=>{
        e.preventDefault()
             axios.put(`http://localhost:1000/ Vedio/${param.id}`,data)
             .then((res)=>{
                 alert("data edited succesfully")
             })
             .catch((err)=>{
                 alert("invalid data format")
             })
    }
    return ( 
        <div className="addvideo">
            {/* <h1>adminedit</h1> */}
            <form action="" onSubmit={submitedit}>
                <label htmlFor="">
                   Title : <input type="text" required placeholder="Enter the vedio name"  value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </label>
                  <br />
                <label htmlFor="">
                     Description: <textarea type="text"  placeholder="Enter the description about the vedio" required cols={30} rows={4} value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </label>
                <br />
                <label htmlFor="">
                    Vediourl: <input type="text" required placeholder="Enter the vedio url" value={vediourl} onChange={(e)=>{setVediourl(e.target.value)}}/>
                </label>
                <br /><br />
                <label htmlFor="">
                    Likes: <input type="number" value={likes} onChange={(e)=>{setLikes(e.target.value)}} />
                </label>
                <br /><br />
                <label htmlFor="">
                    Views: <input type="number" value={views} onChange={(e)=>{setViews(e.target.value)}}/>
                </label>
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Adminedit;