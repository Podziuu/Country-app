import Main from "./Pages/Main";
import Detail from "./Pages/Detail";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";

function App() {
  const isDarkMode = useSelector((state) => state.darkmode.darkMode);

  const classes = isDarkMode
    ? "dark"
    : "";
  return (
    <div className={`font-body box-border ${classes}`}>
            <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
