import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    //If page is not found, the message writes out, link to homepage
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;