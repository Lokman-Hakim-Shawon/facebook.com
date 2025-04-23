import { Routes, Route } from "react-router";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomeMainPage from "./pages/HomeMainPage";
import Friends from "./pages/leftSideBarPages/Friends";
import Memories from "./pages/leftSideBarPages/Memories";
import Saved from "./pages/leftSideBarPages/Saved";
import Groups from "./pages/leftSideBarPages/Groups";
import Videos from "./pages/Videos";
import Shopping from "./pages/Shopping";
// import Groups from "./pages/Groups";
import Gaming from "./pages/Gaming";

function App() {

  return <Routes>
  <Route path="/" element={<Home/>} >
  <Route index element={<HomeMainPage/>} />
  <Route path="videos" element={<Videos/>} />
  <Route path="shopping" element={<Shopping/>} />
  <Route path="groups" element={<Groups/>} />
  <Route path="gaming" element={<Gaming/>} />
  <Route path="about" element={<About/>} />
  <Route path="contact" element={<Contact/>} />
  <Route path="setting" element={<About/>} />
  <Route path="friends" element={<Friends/>} />
  <Route path="memories" element={<Memories/>} />
  <Route path="saved" element={<Saved/>} />
  <Route path="groups" element={<Groups/>} />
  </Route>
  
</Routes>
}

export default App
