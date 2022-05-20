import { Routes, Route, BrowserRouter } from "react-router-dom";
import Presence from "./pages/Presence";
import { Screen } from "./components/Screen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Presence/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
