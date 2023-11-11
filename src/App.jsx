import './App.css';
import Header from "./components/Header.jsx";
import Orders from './components/orders.jsx';
import Menu from './components/Menu.jsx';


function App() {
  return (
  <>
    <div><Header /></div>
    <div className="container">
      <div><Orders /></div>
      <div className="menu-container">
          <div>
              <div className="menu-header">Menu</div>
          <div className="menu-list"><Menu /></div>
        </div>
      </div>
    </div>

  </>)}

export default App;