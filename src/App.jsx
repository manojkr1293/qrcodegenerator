import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">
          Hello, Tailwind CSS with Vite!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          This is a React app using Tailwind CSS and Vite.
        </p>
      </div>
    </>
  );
}

export default App;
