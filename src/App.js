import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Learn React Router for navigation
//Learn Parent-Child component communication
//Learn Props and State management
//Learn use state and use effect hooks


function App() {
  return (
    <div className="App">
      <Router>
        <div className="router-content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
