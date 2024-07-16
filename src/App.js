import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import MainContent from './component/MainContent';
import AllRoutes from './AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
