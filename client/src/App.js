import { BrowserRouter as Router, Switch, Route, NavLink, useParams, useRouteMatch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavbarHeader />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
};

const NavbarHeader = () => {
  return (
    <div>
      NAV
    </div>
  );
};

const MainContent = () => {
  return (
    <div>
      MAIN
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      FOOTER
    </div>
  );
};



export default App;
