import React, { useEffect, useState } from "react";
import axios from "axios";

const TopUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users/top")
            .then((res) => setUsers(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Top Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name} - {user.commentsCount} comments</li>
                ))}
            </ul>
        </div>
    );
};

export default TopUsers;
