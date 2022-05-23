import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainNavigation from './components/layout/Navbar';

import Home from './pages/index'
import LoginPage from './pages/LoginPage';

function App() {
  // localhost:3000
  // quickactions.net
  return (
      <Router>
        <Home />
      </Router>
  );
}

export default App;
