import React from "react";
import "./App.css";
import { useApi } from "hooks";
const App = () => {
  const { data } = useApi("search", "a");

  return (
    <div className="App">
      {data.map((item: any) => (
        <li>{item?.artist?.name}</li>
      ))}
    </div>
  );
};

export default App;
