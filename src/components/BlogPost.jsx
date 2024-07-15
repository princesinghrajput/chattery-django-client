import React from 'react';
import '../App.css'; 

const BlogPost = ({ title, image, author, date, likes, comments }) => {
    return (
        <div className="card">
            <div className="img1">
                <img src="https://avatars.githubusercontent.com/u/83268492?v=4" alt="Blog Post" width="310" height="200" style={{ borderRadius: '12px' }} />
            </div>
            <br />
            <br />
            <p className="card-title">{title}</p>
            <hr />
            <div className="pic">
                <img src="https://avatars.githubusercontent.com/u/83268492?v=4" alt="Author" width="30" height="30" style={{ borderRadius: '30px' }} />
            </div>
            <span className="pic-text">{author}</span>
            <span className="pic-text2">{date}</span>
            <span className="heart"><i className="fas fa-heart"></i></span>
            <p className="likes">{likes}</p>
            <span className="comment"><i className="fas fa-comment-dots"></i></span>
            <p className="comments">{comments}</p>
        </div>
    );
};

export default BlogPost;
