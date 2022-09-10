import Main from "./Pages/Main";
import Detail from "./Pages/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-body box-border">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
