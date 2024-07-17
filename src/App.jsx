import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Error from "./NotFoundPage/Error";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";


function App() {
  return ( <>
  <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/show/:id" element={<Show/>}/>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="*" element={<Error/>}></Route>
   </Routes>
  <Footer/>
  </> );
}

export default App;