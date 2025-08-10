import { Link } from "react-router";

function Navigation() {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/about">About</Link>
    </>
  );
}

export default Navigation;
