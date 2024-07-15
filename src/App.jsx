import React from 'react';
import './App.css'; // Assuming your CSS is in App.css
import Header from './components/Header';
import Main from './components/Main';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <div className="posts"><b>Blog Posts</b></div>
            <section className="cards">
                {/* Example Blog Post */}
                <BlogPost
                    title="How To Make GUI In Java With Example Example"
                    image="./image/img1.png"
                    author="Dasteen"
                    date="Jan 10, 2022"
                    likes="03"
                    comments="12"
                />
                {/* Additional Blog Posts Here */}
            </section>
            <Footer />
        </div>
    );
}

export default App;
