// src/components/BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ title, image, author, date, comments, id }) => {
  return (
    <Link to={`/blog/${id}`} className="card max-w-xl bg-white rounded-lg shadow-md overflow-hidden mx-auto">
      <img className="w-full h-60 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <hr />
        <div className="flex items-center mt-4">
          <img
            className="w-8 h-8 rounded-full mr-4"
            src="https://avatars.githubusercontent.com/u/83268492?v=4"
            alt={author}
          />
          <p className="text-lg">{author}</p>
        </div>
        <div className="flex justify-between items-center mt-4 text-gray-500">
          <span className="text-sm">{date}</span>
          <div className="flex items-center space-x-2">
            <span className="text-red-500">❤️</span>
            <span>💬 {comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
