import { Route, Routes } from "react-router-dom";
import DataContext from "./components/custom/DataContext";
import Home from "./components/custom/Home";
import Dummy from "./components/custom/Dummy";

function App() {
  return (
    <DataContext>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createArticle" element={<Dummy />}></Route>
        <Route path="/genarateArticle" element={<Dummy />}></Route>
        <Route path="/keyword" element={<Dummy />}></Route>
      </Routes>
    </DataContext>
  );
}

export default App;
