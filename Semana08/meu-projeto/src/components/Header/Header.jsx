import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
     <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/products'}>Contact</Link></li>
      <li><Link to={'/faq'}>FAQ</Link></li>
      <li><Link to={'*'}>Batata</Link></li>
    </ul>
    </div>
  );
};

export default Header;