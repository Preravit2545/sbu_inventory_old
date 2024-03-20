import './App.css';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <SideNav />
      <Footer />
    </div>
  );
}

export default App;
