// import home from "./pages/Home/home";
import Navbar from "./components/Navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Video from "./pages/Video/video"; // agar video page hai
import { useState } from "react";
const App = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return(
    <div>
      <Navbar setIsSidebar={setIsSidebar}/>
      <Routes> 
        <Route path="/" element={<Home isSidebar={isSidebar}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video isSidebar={isSidebar}/>}/>

      </Routes>
    </div>
  )
}

export default App;