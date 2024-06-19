import React, { useState } from 'react';

const Blog = () => {
  // Example list of blog posts (you can fetch this from an API or database)
  const [blogPosts, setBlogPosts] = useState([
    // { id: 1, title: 'Coming soon', content: '' },

  ]);

  // Function to render blog posts
  const renderBlogPosts = () => {
    return blogPosts.map(post => (
      <div key={post.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        {/* Example: Link to read more */}
        <a href={`/blog/${post.id}`}>Read more</a>
      </div>
    ));
  };

  return (
    <>
      <h1>Hamarosan!</h1>
      <p></p>

      {/* Render blog posts */}
      {renderBlogPosts()}
    </>
  );
};

export default Blog;
