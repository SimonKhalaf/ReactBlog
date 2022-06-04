import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Simon's blog</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" 
          style={{ 
          color: 'white', 
          backgroundColor: 'rgb(39, 142, 176)',
          borderRadius: '8px' 
        }}>Create a new blog</Link>
        <Link to="/update" 
          style={{ 
          color: 'white', 
          backgroundColor: 'rgb(39, 142, 176)',
          borderRadius: '8px' 
        }}>Update/delete blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;