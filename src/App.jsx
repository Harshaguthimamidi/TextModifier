
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TextBox from './components/TextBox.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';

function App() {
  
  return (
    
  <>
  <Router>
  <Navbar title="TextModifier"   >
       <Link to="/ ">Home</Link>
        <Link to="/about">About</Link>
        </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </Router>
  <TextBox  heading="Text Analyzer" words="start here"/>

  </>
  );
}

export default App;
