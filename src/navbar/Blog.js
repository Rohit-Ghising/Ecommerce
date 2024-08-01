import React from 'react';
import { useGetBlogsQuery } from '../Api/blogApi'; // Adjust the path as necessary
import Footer from '../components/Footer';

const Blog = () => {
  const { isLoading, error, data } = useGetBlogsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const blogs = data?.data;

  return (
    <div>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1200px; /* Adjust based on your design */
          margin: 0 auto;
          padding: 16px;
        }

        .blogs-list {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .blog-container {
          flex: 1 1 calc(33.333% - 32px); /* 33.333% width minus the gap */
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .blog-image-container {
          width: 100%;
          height: 200px; /* Adjust height as needed */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-bottom: 1px solid #ddd;
          margin-bottom: 16px;
        }

        .blog-image {
          width: auto;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
        }

        .blog-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-align: center;
        }

        .blog-detail {
          font-size: 1rem;
          color: #333;
          text-align: center;
          margin-bottom: 8px;
        }

        .blog-name {
          font-size: 1rem;
          font-weight: 600;
          color: #555;
          text-align: center;
          margin-top: 8px;
        }
      `}</style>
      <div className="container">
        <div className="blogs-list">
          {blogs?.map((blog, i) => (
            <div key={i} className="blog-container">
              <div className="blog-image-container">
                <img
                  src={blog.blog_image}
                  alt={blog.blog_name || 'Blog Image'}
                  className="blog-image"
                  onError={(e) => {
                    console.error(`Failed to load image: ${blog.blog_image}`);
                    e.target.src = '/path/to/placeholder-image.png'; // Fallback image in case of an error
                  }}
                />
              </div>
              <h2 className="blog-title">{blog.blog_name}</h2> {/* Display blog name as title */}
              <p className="blog-detail">{blog.blog_detail}</p> {/* Display blog detail */}
              <p className="blog-name">{blog.blog_author}</p> {/* Display blog author */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
