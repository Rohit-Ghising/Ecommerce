import React from 'react';
import Footer from '../components/Footer';
import couch from '../images/couch.png';
import { useGetBlogsQuery } from '../Api/blogApi';

const Blog = ({ limit }) => {
  const { isLoading, error, data } = useGetBlogsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Conditionally limit the number of blogs to show based on the limit prop
  const blogsToShow = limit ? data?.data.slice(0, limit) : data?.data;

  return (
    <>
    {/* <div className="bg-green-800">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-white text-4xl font-bold mb-4">
      Blogs
    </h1>
    <p className="text-white mb-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa nostrum iste illo consectetur suscipit tempore temporibus corporis ad?
      
    </p> <br />
    <div className="flex space-x-3 mb-4">
      <button
        className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full text-sm hover:bg-yellow-500 w-32 text-center"
      >
        Shop Now
      </button>
      <button
        className="px-4 py-2 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-800 w-32 text-center"
      >
        Explore
      </button>
    </div>
    <img src={couch} alt="Couch" className="mx-auto w-full max-w-lg scale-110" />
  </div>
</div> */}

    <div className="p-4">

      <h1>Recent Blogs</h1> <br />
      <style jsx>{`
        .blog-container {
          margin-bottom: 32px; /* Adds space between each blog */
        }

        .blog-image-container {
          width: 100%;
          height: 200px; /* Adjust height as needed */
          margin-bottom: 16px; /* Space between image and details */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .blog-image {
          width: auto;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
        }

        .blog-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
          text-align: center; /* Center the title */
        }

        .blog-detail {
          font-size: 1rem;
          color: #333;
          margin-bottom: 16px;
          text-align: center; /* Center the description */
        }

        .blog-author {
          font-size: 0.875rem;
          font-weight: 500;
          color: #777;
          text-align: center; /* Center the author */
        }
      `}</style>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsToShow?.map((blog, i) => (
          <div key={i} className="blog-container">
            <div className="blog-image-container">
              <img
                src={blog.blog_image}
                alt={blog.blog_name || 'Blog Image'}
                className="blog-image"
                onError={(e) => {
                  console.error(`Failed to load image: ${blog.blog_image}`);
                  e.target.src = '/path/to/placeholder-image.png'; // Ensure this path is correct
                }}
              />
            </div>
            <h2 className="blog-title">{blog.blog_name}</h2>
            <p className="blog-detail">{blog.blog_detail}</p>
            <p className="blog-author">{blog.blog_author}</p>
          </div>
        ))}
      </div>
     
    </div>
    </>
  );
};

export default Blog;
