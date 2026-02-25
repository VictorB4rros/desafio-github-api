import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Root/Home";
import Find from "./routes/Root/Find";
import ProfileCard from "./components/ProfileCard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="find/" element={<Find />} >
            <Route path="result" element={<ProfileCard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
