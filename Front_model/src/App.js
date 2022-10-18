//import LoginPage from './LoginPage';
import HomePage from './HomePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<HomePage />} />

        </Routes>
      </Router>
    </div>
  );
}
export default App;
