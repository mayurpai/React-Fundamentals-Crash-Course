import { useState } from "react";

export const Form = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Submitted By ${username}`);
  };

  return (
    <>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit!
        </button>
      </form>
    </>
  );
};
