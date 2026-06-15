import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Entries from "./pages/Entries";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/entries" element={<Entries/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default App