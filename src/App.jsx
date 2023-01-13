import React, { useState } from "react";
import Header from "./components/Header";
import ListTasks from "./components/ListTasks";
import PostTask from "./components/PostTask";
import BtnDeletAll from "./components/BtnDeletAll";
import './App.css'

export const App = () => {
  const [updateTasks, setUpdate] = useState(false);
  return (
    <div className="app">
      <Header />
      <PostTask className="input" setUpdate={setUpdate} updateTasks={updateTasks} />
      <ListTasks setUpdate={setUpdate} updateTasks={updateTasks} />
      <BtnDeletAll setUpdate={setUpdate} updateTasks={updateTasks} />
    </div>
  );
}

export default App;