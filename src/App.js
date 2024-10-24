import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UploadDocument from "./pages/UploadDocument";
import UploadAllDocument from "./pages/UploadAllDocument";
import "./App.css";
import { useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext, AppProvider } from "./context/AppContext";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { paramsApp, setParamsApp } = useContext(AppContext);

  const params = Object.fromEntries([...searchParams]);
  // console.log(params);

  useEffect(() => {
    setParamsApp(params);
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<UploadDocument />} />
      </Routes>

    </>
  );
}

export default App;
