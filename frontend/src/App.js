import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Read from "./components/Read";
import Users from "./components/Users";
import Update from "./components/Update";
 
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/" element={<Users />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;