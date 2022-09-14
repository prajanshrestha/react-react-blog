import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(`http://localhost:9000/blogs/${id}`);
  const history = useHistory();

  const deleteBlog = () => {
    axios.delete(`http://localhost:9000/blogs/${id}`)
      .then((response) => {
        history.push("/");
      })
  }

  const setData = (data) => {
    let { author, body, title } = data;
    localStorage.setItem("author", author);
    localStorage.setItem("body", body);
    localStorage.setItem("title", title);

    history.push(`/blog/edit/${blog.id}`);
  }

  return (
    <div className='blog-details'>
      { isLoading && <h2>Loading...</h2> }
      { error && <h2>{ error }</h2> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>{ blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={() => setData(blog)} style={{marginRight: "10px"}}>Edit Blog</button>
          <button onClick={deleteBlog}>Delete Blog</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
