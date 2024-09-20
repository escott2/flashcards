import { useState } from "react";
import { Home } from "./pages";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Home />
    </div>
  );
}

export default App;
