import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import MainContent from './component/MainContent';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
    <AllRoutes/>
    <Footer />
    </div>
  );
}

export default App;
