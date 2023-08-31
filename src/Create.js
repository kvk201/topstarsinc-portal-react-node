import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('vivek')
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=> {
        e.preventDefault(); //prevents page from refreshing after submit
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add new entry</h2>
            <form onSubmit={handleSubmit}>
                <label>:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label>author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="vivek">vivek</option>
                    <option value="messi">messi</option>
                </select>
                {!isPending && <button>Add entry</button>}
                {isPending && <button disabled>Adding entry....</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;