import { Route, Routes } from "react-router-dom";
import DataContext from "./components/custom/DataContext";
import Home from "./components/custom/Home";
import Dummy from "./components/custom/Dummy";

function App() {
  return (
    <DataContext>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/general-articles" element={<Dummy />}></Route>
        <Route path="/published-articles" element={<Dummy />}></Route>
        <Route path="/archived-articles" element={<Dummy />}></Route>
        <Route path="/scheduled-articles" element={<Dummy />}></Route>
      </Routes>
    </DataContext>
  );
}

export default App;
