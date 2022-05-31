import React from "react";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import About from "../pages/About";
import NoPage from "../pages/NoPage";
import Home from "../pages/Home";
import Contacts from "../pages/Contact";
import Profile from "../pages/Profile";
function App(){
    return(
       <Router>
           <nav>
               <Link to="/">Home</Link>
               <Link to="/About">About</Link>
               <Link to="/Contacts">Contacts</Link>
               <Link to="/profile">Profile</Link>
           </	nav>
           <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/About" element={<About />}/>
               <Route path="/Contacts" element={<Contacts />}/>
               <Route path="/Profile" element={<Profile />}/>
               <Route path="/Profile/:username" element={<Profile />}/>
               <Route path="*" element={<NoPage />}/>
           </Routes>
           <footer>
               <p>This is the footer</p>
           </footer>
       </Router>
    )
}
export default App;
