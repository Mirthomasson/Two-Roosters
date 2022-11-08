import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { AddressMap } from './components/MapSection';
import { homeObjSix } from './components/AboutSection/data';



function App() {
  return (
    <Router>
      <Home />
      <AddressMap {...homeObjSix} />
    </Router>
  );
}

export default App;
