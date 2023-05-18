import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UploadDocument from "./pages/UploadDocument";
import UploadAllDocument from "./pages/UploadAllDocument";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/upload-document" element={<UploadDocument />} />
      <Route path="/upload-all-document" element={<UploadAllDocument />} />
    </Routes>
  );
}

export default App;
