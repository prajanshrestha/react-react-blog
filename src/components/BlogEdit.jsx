import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const BlogEdit = () => {
    const { id } = useParams();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");

    useEffect(() => {
        setTitle(localStorage.getItem('title'));
        setBody(localStorage.getItem('body'));
        setAuthor(localStorage.getItem('author'));
    }, []);

    const submitBlogEditForm = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        axios.put(`http://localhost:9000/blogs/${id}`, blog)
            .then((response) => {
                history.push("/"); 
            })
    }

    return (
        <div className='create'> 
            <h2>Edit blog</h2>
            <form onSubmit={submitBlogEditForm}>
            <label>Blog title:</label>
            <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
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
            <button>Edit Blog</button>
            </form>
        </div>
    );
}
 
export default BlogEdit;