import { useState, useEffect } from "react";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${userId} : ${title} : ${body}`);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
    //   .then((json) => console.log(json));
  }, []);

  return (
    <>
      <form>
        <div>
          <label>User Id</label>
          <input
            type="text"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          ></input>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
          <label>Body</label>
          <input
            type="text"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit!
        </button>
      </form>
    </>
  );
};
