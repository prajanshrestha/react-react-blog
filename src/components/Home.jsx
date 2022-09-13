import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  const { data: blogs, isLoading, error } = useFetch("http://localhost:9000/blogs");

  // const deleteBlog = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  return (
    <div className="home">
      { error && <h2>{ error }</h2> }
      { isLoading && <h2>Loading...</h2> } 
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario Blogs!" /> */}
    </div>
  )
}

export default Home