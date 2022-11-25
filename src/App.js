import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Customers, Orders } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
