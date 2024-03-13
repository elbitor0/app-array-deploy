import Header from './pages/Header';
import NavBar from './pages/Navbar';
import Footer from './pages/Footer';
import ListDrivers from './pages/ListDrivers';
import TableDrivers from './pages/TableDrivers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './F1.css'
    
function App() {
    return (
      <Router basename='app-array-deploy'>
       <Routes>
           <Route path="/" element = {<Home/>} />
           <Route path="/List" element = {<ListDrivers/>} />
           <Route path ="/table" element = {<TableDrivers/>} />
           <Route path="*" element = { <PageNotFound /> } />            
       </Routes>
   </Router>
    );
}	
    
export default App