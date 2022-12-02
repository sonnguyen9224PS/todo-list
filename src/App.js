import "./App.css";
import "antd/dist/antd.min.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />}></Route>
      <Route exact path="/detailpage/:id" element={<DetailPage />}></Route>
    </Routes>
  );
}

export default App;
