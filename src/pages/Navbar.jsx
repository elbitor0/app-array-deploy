import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to ="/Home">About</Link>
        <Link to ="/List">List</Link>
        <Link to ="/Home">Home</Link>
      </ul>
    </nav>
  );
}

export default Navbar;