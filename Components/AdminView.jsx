import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Adminview.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
const AdminView = () => {
  let [data1, setdata1] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    // fetch("http://localhost:1000/ Vedio")
    //   .then((res) => {
    //     res.json()
    //     .then((data) => {
    //       console.log(data);
    //       setdata1(data);
    //     })
    //     .catch((err)=>{
    //        console.log(err);
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios
      .get("http://localhost:1000/ Vedio")
      .then((response) => {
        console.log(response.data);
        setdata1(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data1]);
  let editvid = (id) => {
    navigate(`/adminhomepage/editvideo/${id}`);
  };

  let remove = (id, title) => {
    axios
      .delete(`http://localhost:1000/ Vedio/${id}`)
      .then((res) => {
        alert(`${title} has been deleted`);
      })
      .catch(() => {
        alert("Vedio not found");
      });
  };

  return (
    <div className="adminview">
      {/* <h1>AdminView</h1> */}
      {data1.map((x) => {
        return (
          // <h1>{x.title}</h1>

          <div className="display">
            {/* <iframe src="x.vediourl" frameborder="0"></iframe> */}
            <iframe
              width="560"
              height="315"
              src={x.vediourl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h3>{x.title} ||</h3>
            <span id="des">{x.description}</span>
            {/* <button id="de1">delete</button>
                <button id="edit">Edit</button> */}
            <div className="options">
              <span>
                <VisibilityIcon />
                {x.views}
              </span>
              <span>
                <ThumbUpIcon />
                {x.likes}
              </span>
              <DeleteIcon
                onClick={() => {
                  remove(x.id, x.title);
                }}
              />
              <button
                onClick={() => {
                  editvid(x.id);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminView;
