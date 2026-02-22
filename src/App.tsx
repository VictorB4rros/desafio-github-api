import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Root/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
