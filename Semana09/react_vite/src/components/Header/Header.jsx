import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
     <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/contact'}>Contact</Link></li>
      <li><Link to={'/faq'}>FAQ</Link></li>
      <li><Link to={'*'}>*</Link></li>
    </ul>
    </div>
  );
};

export default Header;