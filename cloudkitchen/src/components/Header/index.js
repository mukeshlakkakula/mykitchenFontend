import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <Link to="/">
          <img
            style={{ width: "100px" }}
            src="https://i.pinimg.com/736x/f4/d1/eb/f4d1eba4d1b4ef81e1cc9af8e7285207.jpg"
            alt="kitchenLogo"
          />
        </Link>

        <Link to="/">
          <button className="btnOfHeader">Home</button>
        </Link>

        <div className="innerContainer">
          <Link to="/cart">
            <button className="btnOfHeader">Cart</button>
          </Link>
          <Link to="/login">
            <button className="btnOfHeader">Login</button>
          </Link>
          <Link to="/createuser">
            <button className="btnOfHeader">Signup</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
