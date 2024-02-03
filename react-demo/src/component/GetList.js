import { useEffect, useState } from "react";

export const GetList = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((err) => {
        alert(err);
      });
  }, []); // Dependency Array -> State (Side Effects) Whenever Your State Changes, The Dom Re-Renders!
  // 1. No Dependency -> Initial Time Page Load
  // 2. Array/State Dependency -> Whenever The State Changes, The Component Re-Renders!

  return (
    <>
      <h1>Get List</h1>
      <ul>
        {post.map((itr) => {
          return <div key={itr.id}>{itr.title}</div>;
        })}
      </ul>
    </>
  );
};
