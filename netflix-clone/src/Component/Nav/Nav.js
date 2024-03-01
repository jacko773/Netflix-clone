import Search from "../Search/Search";
import NavImage from "./NavImage.png";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_logo">
        <img
          className="nav_logo_image"
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          src={NavImage}
          alt="Net flix"
        />
        CLONE
      </div>
      <ul className="navbar_links">
        <li className="navbar_link">Home</li>
        <li className="navbar_link">Tv shows</li>
        <li className="navbar_link">Movies</li>
        <li className="navbar_link">Latest</li>
        <li className="navbar_link">My List</li>
      </ul>
      <Search></Search>
    </div>
  );
};

export default Nav;
