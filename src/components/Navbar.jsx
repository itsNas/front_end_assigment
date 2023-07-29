import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <button>
          <BsArrowLeft />
        </button>
      </Link>
      <h1>Morning Masscoder</h1>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/leaves">Leaves</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
