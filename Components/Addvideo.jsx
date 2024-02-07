import { useState } from "react";
import axios  from "axios";
import "../Styles/Addvedio.css"
const Addvideo = () => {
    let[title,setTitle]=useState("")
    let[description,setDescription]=useState("")
    let[vediourl,setVediourl]=useState("")
    let[likes,setLikes]=useState("")
    let[views,setViews]=useState("")
    let data={title,description,vediourl,likes,views}
     let addvideo=()=>{
        axios.post("http://localhost:1000/ Vedio",data)
        .then((res)=>{ 
           console.log(res);
           alert("data added successfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("data not added")
        })
     }
    return ( 
        <div className="addvideo">
            {/* <h1>Addvideo</h1> */}
            <form action="" onSubmit={addvideo}>
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
 
export default Addvideo;