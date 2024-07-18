// src/components/BlogDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);
  console.log("BlogDetail.......", blogDetail)

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/blogs/${id}/`);
      const data = await response.json();
      setBlogDetail(data);
    };

    fetchBlogDetail();
  }, [id]);

  if (!blogDetail) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={blogDetail.image_path} alt={blogDetail.title} className="w-full h-96 object-cover" />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{blogDetail.title}</h1>
        <div className="flex items-center space-x-4 mb-6">
          <img
            className="w-12 h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/83268492?v=4" // Placeholder image
            alt={blogDetail.author}
          />
          <div>
            <p className="text-lg font-semibold">{`User ${blogDetail.user}`}</p>
            <p className="text-gray-600">{new Date(blogDetail.created_at).toLocaleDateString()}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{blogDetail.description}</p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments ({blogDetail.comments.length})</h2>
          <ul className="space-y-4">
            {blogDetail.comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <p className="text-gray-800">{comment.text}</p>
                <p className="text-sm text-gray-600 mt-2">{`User ${comment.user} - ${new Date(comment.created_at).toLocaleDateString()}`}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
