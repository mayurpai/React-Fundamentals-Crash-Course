import "./App.css";
import { PostList } from "./component/PostList.js";

function App() {
  const element = <h1>Hello, World! 👋</h1>;

  return (
    <div className="App">
    <PostList></PostList>
    </div>
  );
}

export default App;
