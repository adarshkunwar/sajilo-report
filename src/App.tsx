import LandingPage from "./components/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateDocument from "./pages/create-document";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-document" element={<CreateDocument />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
