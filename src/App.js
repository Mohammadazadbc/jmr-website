import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./screen/Home";
import Profile from "./screen/Profile";

function App() {
  return ( 
  <BrowserRouter>
    <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/profile" element={<Profile/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
