import AdminNavbar from "./AdminNavbar"
import { Route,Routes } from "react-router-dom";
import AdminView from "./AdminView"
import Addvideo from "./Addvideo";
import Adminedit from "./Adminedit"
const AdminHomepage = () => {
    return ( 
     <div className="adminhp">
        <AdminNavbar/>
        <Routes>
            <Route path="/adminview" element={<AdminView/>}/>
            {/* <Route path="/addvedio" element={</Addvideo/>}/> */}
            <Route path="/addvedio" element={<Addvideo/>}/>
            <Route path="/editvideo/:id" element={<Adminedit/>}/>
        </Routes>

     </div>
     );
}
 
export default AdminHomepage;