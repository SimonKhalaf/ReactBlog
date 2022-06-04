import { Link } from 'react-router-dom';
import { useState } from 'react';

const BlogList = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    //Searchinput filters among all blogs in the database, lookin for LowerCase etc, returning blogs if searchinput is empty. 
    <div className="blog-list">
      <input type="text" placeholder="Search.." onChange={event => {setSearchTerm(event.target.value)}}/>
      {blogs.filter((blog) => {
        if (searchTerm == "") {
          return blog;
        } else if (blog.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return blog;
        }
        //Maping through the blogs
      }).map((blog) => {
        return (
          <Link to={`/blogs/${blog.id}`}>
          <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by { blog.author }</p>
          </div></Link>
        )
      })}
    </div>
  );
}
 
export default BlogList;