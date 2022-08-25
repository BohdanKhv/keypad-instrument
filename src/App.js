import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <Router>
      <div className="container max-w mx-auto">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
