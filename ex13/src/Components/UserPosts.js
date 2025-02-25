import React, { useState, useEffect } from 'react';

const UserPosts = ({ userId }) => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        setPosts(data);
      };
      fetchData();
    }, [userId]);
  
    return (
      <div>
        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  export default UserPosts;