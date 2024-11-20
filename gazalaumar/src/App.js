import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Venue from './components/Venue';
import Relatives from './components/Relatives';
import DateSection from './components/Date';

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Home />
      <DateSection />
      <Relatives />
      <Venue />

    </div>
  );
}

export default App;
