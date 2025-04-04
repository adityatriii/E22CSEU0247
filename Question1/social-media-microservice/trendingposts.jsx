import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/posts/trending")
            .then((res) => setPosts(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Trending Posts</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.content} - {post.commentsCount} comments</li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingPosts;
