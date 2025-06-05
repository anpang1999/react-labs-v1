import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-300 mb-4 pb-2 flex gap-3 items-center">
      <Link to="/" className="hover:text-blue-600">
        Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  );
}
