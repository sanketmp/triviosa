import { Link } from "react-router-dom";
import insp from "../../assets/insp.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        <img className="logo" src={insp} alt="Logo" />
        Triviosa
      </Link>
    </div>
  );
};

export default Header;
