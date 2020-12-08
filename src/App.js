import './App.css';
import SideDrawer from './components/Drawer/SideDrawer';
import Navbar from './components/Navbar/Navbar';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
