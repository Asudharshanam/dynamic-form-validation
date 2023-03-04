import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { OrgProfile } from "./components/OrgProfile";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/org-profile" element={<OrgProfile />} />
        <Route path="user-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
