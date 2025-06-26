import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <Card username="Ray" role="Data Analyst" />
        <Card role="Frontend Engineer" username="Emily" />
        <Card username="Margret" role="Senior Engineer" />
      </div>
    </div>
  );
}

export default App;
