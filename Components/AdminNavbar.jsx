import {Link} from "react-router-dom"
import "../Styles/Adminnav.css"
const AdminNavbar = () => {
    return (  
        <div className="adminnavbar">
            
              <div className="logo">
                <img src="https://tse3.mm.bing.net/th?id=OIP.aE3EJh7aY5FDioJY9PHnuAHaE8&pid=Api&P=0&h=180" alt="" />
              </div>
              <div className="options">
                    <Link to="/adminhomepage/adminview" id="l1">View</Link>
                    <Link to="/adminhomepage/addvedio" id="l2">Addvedio</Link>
              </div>

        </div>
    );
}
 
export default AdminNavbar;