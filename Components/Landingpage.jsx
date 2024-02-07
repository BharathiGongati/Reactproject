import { Link } from "react-router-dom";
import "../Styles/Landing.css"
const Landingpage = () => {
  return (
    <div className="landing">
      <h1>Landing page</h1>
      <div className="landsub">
        <Link to="userLogin">
            <img src="https://thumbs.dreamstime.com/z/user-profile-my-account-avatar-login-icon-man-male-face-smile-symbol-flat-vector-human-person-member-sign-user-profile-182815734.jpg" alt="" className="img1"/>
          <h3> User Login</h3>
        </Link>
        <Link to="adminLogin">
            <img src="https://e7.pngegg.com/pngimages/593/686/png-clipart-child-care-computer-icons-avatar-user-profile-child-child-face.png" alt="" className="img2"/>
            <h3>Admin Login</h3>
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;
