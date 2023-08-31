import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    //data: blogs... means grab the data from the useFetch custom hook but call it blogs instead

    
    //use effects runs everytime the component re-renders.. it takes a function as arg and this fn runs everytime comp rerenders
    useEffect(()=>{
        console.log('use effect ran on each render and re-render');
    });
    
    useEffect(()=>{
        console.log('use effect ran on render and re-render of blog');
    }, [blogs]);

    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Entries"/>/*conditional template, only if left is true right template will be outputted*/}
            { blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='vivek')} title="Vivek's Entries"/>}
        </div>
     );
}
 
export default Home;