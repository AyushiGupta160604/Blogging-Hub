// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    // We don't directly invoke the function because it just fires it even one button is not clicked, hence we wrap it in an anonymous function.
    // const handleClickAgain = (name) => {
    //     alert(`Hello ${name}!`);
    // };
    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs = {blogs} title = "All Blogs" /> }
        </div>
    );
}
export default Home;