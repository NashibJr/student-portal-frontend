import React, { useEffect } from "react";
import NavigationBar from "./components/navigation";
import client from "./app/client";
import Login from "./pages/login";

const App = () => {
  return (
    <div className="container">
      <Login />
    </div>
  );
};

export default App;
