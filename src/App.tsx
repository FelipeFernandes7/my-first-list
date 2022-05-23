import { Routes, Route, BrowserRouter } from "react-router-dom";
import Presence from "./pages/Presence";
import { AddProvider } from "./context/addUserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AddProvider.Provider
      value={[]}>
      <Routes>
      <Route path="/" element={<Presence/>} />
      </Routes>
      </AddProvider.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
