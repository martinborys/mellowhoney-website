import "./home.css";

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Mellow Honey
      </a>
      <ul>
        <li>
          <a href="/Music">Music</a>
        </li>
        <li>
          <a href="/Merch">Merch</a>
        </li>
        <li>
          <a href="/Photos">Photos</a>
        </li>
        <li>
          <a href="/Concerts">Concerts</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
