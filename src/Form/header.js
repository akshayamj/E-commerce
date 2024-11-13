// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <div class="hi">
//       <h2>Hello,Welcome to the page</h2>
//       <Link class="side" to="/">Login</Link> | <Link class="side" to="/profile">Profile</Link> | <Link class="side" to="/register">Register</Link>
//     </div>
//   );
// }

// export default Header;

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="hi">
      <h2>Hello, Welcome to the page</h2>
      <Link className="side" to="/">
        Home
      </Link>
      <span> | </span>
      <Link className="side" to="/login">
        Login
      </Link>
      <span> | </span>
      <Link className="side" to="/profile">
        Profile
      </Link>
      <span> | </span>
      <Link className="side" to="/register">
        Register
      </Link>
    </div>
  );
}

export default Header;
