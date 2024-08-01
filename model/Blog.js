import mongoose from "mongoose";



const blogSchema = new mongoose.Schema({

  blog_name: {
    type: String,
    required: true
  },
  blog_detail: {
    type: String,
    required: true
  },
  blog_image: {
    type: String,
    required: true
  }


}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);


export default Blog;