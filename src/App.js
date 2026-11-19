import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./StudentProvider";
import Navbar from "./Navbar";
import Studentlist from "./Studentlist";
import Favourites from "./Favourites";
function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Studentlist />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;