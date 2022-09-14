import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function BlogCreate() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const submitBlogCreateForm = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);
    
    axios.post("http://localhost:9000/blogs", blog)
    .then((response) => {
      console.log("blog added");
      setIsLoading(false);

      // history.go(-1);
      history.push("/");
    });
   
  }

  return (
    <div className='create'> 
        <h2>Add a new blog</h2>
        <form onSubmit={submitBlogCreateForm}>
          <label>Blog title:</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Blog body:</label>
          <textarea 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          >
          </textarea>
          <label>Blog author:</label>
          <select 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">Mario</option>
            <option value="yoshi">Yoshi</option>
          </select>
          {!isLoading && <button>Add Blog</button>}
          {isLoading && <button disabled>Adding Blog...</button>}
        </form>
    </div>
  )
}

export default BlogCreate