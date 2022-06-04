import React, { useEffect, useState } from 'react'

function UpdateDelete() {
  const [blogs, setBlog] = useState([])
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [blogId, setBlogId]=useState(null)

  useEffect(() => {
    getBlog();
  }, [])
  //Gets the blogs and their id, title, author and body
  function getBlog() {
    fetch("http://localhost:8000/blogs/").then((result) => {
      result.json().then((resp) => {
        setBlog(resp)
        setTitle(resp[0].title)
        setAuthor(resp[0].author)
        setBody(resp[0].body)
        setBlogId(resp[0].id)
      })
    })
  }

  //Writing out the blog you selected after clicking update
  function selectBlog(id) {
    let item=blogs[id-1];
        setTitle(item.title)
        setAuthor(item.author)
        setBody(item.body);
        setBlogId(item.id)
  }

  //Function for updating the blog
  function updateBlog() {
    let item={title, author, body}
    console.warn("item",item)
    fetch(`http://localhost:8000/blogs/${blogId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getBlog()
      })
    })
  }

  //Deletefunction
  function deleteBlog(id) {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getBlog()
      })
    })
  }

  return (
    <div className="testar">
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Author</td>
            <td>Body</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
          {
            blogs.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.body}</td>
                <td><button onClick={() => selectBlog(item.id)}>Update</button></td>
                <td><button onClick={() => deleteBlog(item.id)}>Delete</button></td>
              </tr>
            )}
        </tbody>
      </table>
      <div className="create"><br />
      <h2>Update blog</h2>
      <label>Title</label>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> <br />
      <label>Author</label>
      <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} /> <br />
      <label>Body/text</label>
      <textarea type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} />
      <button onClick={updateBlog}>Update blog</button>  
      </div>
    </div>
  );
}

export default UpdateDelete;