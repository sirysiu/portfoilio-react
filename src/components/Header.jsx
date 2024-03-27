import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <header>
      <h1>Siry Siu</h1>
      <ul>
        <li>< Link className={location.pathname==="/" && "active"} to="/">About</Link></li>
        <li>< Link className={location.pathname==="/about" && "active"} to="/about">Portfolio</Link></li>
        <li>< Link className={location.pathname==="/blog" && "active"}to="/blog">Contact</Link></li>
        <li>< Link className={location.pathname==="/contact" && "active"}to="/contact">Resume</Link></li>
      </ul>
    </header>
  );
}

export default Header;