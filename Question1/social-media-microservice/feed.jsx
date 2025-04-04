import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/posts/latest")
            .then((res) => setPosts(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Latest Posts</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default Feed;
