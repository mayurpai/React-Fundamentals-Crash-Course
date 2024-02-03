import { useState } from "react";

export const Message = (props) => {
  const [message, setMessage] = useState("Welcome To Gx!");
  props.username = "Mayur Pai"
  return (
    <>
      <h1>{message}</h1>
      <h1>{props.username}</h1>
      <button onClick={() => setMessage("Done For The Day!")}>Click Me!</button>
    </>
  );
};
