import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function App() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/blogs/');
            const data = await response.json();
            setBlog(data);
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <Header />
            <Main />
            <div className="posts"><b>Blog Posts</b></div>
            <section className="cards">
                {blog.map(post => (
                    <BlogPost
                        key={post.id}
                        title={post.title}
                        image={post.image_path}
                        author={`User ${post.user}`} // Placeholder for user name
                        date={new Date(post.created_at).toLocaleDateString()}
                        comments={post.comments.length}
                    />
                ))}
            </section>
            <Footer />
        </div>
    );
}

export default App;
