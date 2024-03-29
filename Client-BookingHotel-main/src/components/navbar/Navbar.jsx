import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); 
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">StayHub</span>
        </Link>
        {user ? (
          <>
            <div className="navUser">
              <Link to="/account">
                <span className="user-nav">Hello, {user.username}</span>
              </Link>
              <button className="navButton" onClick={handleLogout}>
                Logout
              </button>{" "}
            </div>
          </>
        ) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
