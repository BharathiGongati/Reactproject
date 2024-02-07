import Landingpage from "./Components/Landingpage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdiminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminSignUp from "./Components/AdminSignUp";
import AdminHomepage from "./Components/AdminHomepage";
import UserSignup from "./Components/UserSignup"
import Userhomepage from "./Components/Userhomepage";
import Error from "./Components/Error"
const App = () => {
  return (
      <div className="app">
          {/* <Landingpage/> */}
          {/* <h1>App file</h1> */}
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/*"  element={<Error/>}/>
            <Route path="/userLogin" element={<UserLogin/>}/>
            <Route path="/adminLogin" element={<AdiminLogin/>}/>
            <Route path="/adminsignup" element={<AdminSignUp/>}/>
            <Route path="/adminhomepage/*" element={<AdminHomepage/>}/>
            <Route path="/usersignup" element={<UserSignup/>}/>
            <Route path="/userhomepage" element={<Userhomepage/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    );
}

export default App;