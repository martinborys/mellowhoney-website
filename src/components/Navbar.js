import "../pages/Home/home.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  const styles = {
    customFont: {
      fontFamily: "GamerBold",
    },
  };

  return (
    <nav className="nav" style={styles.customFont}>
      <Link to="/" className="site-title">
        MELLOW HONEY
      </Link>
      <ul>
        <CustomLink to="/Music">Music</CustomLink>
        <CustomLink to="/Merch">Merch</CustomLink>
        <CustomLink to="/Photos">Photos</CustomLink>
        <CustomLink to="/Shows">Shows</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
