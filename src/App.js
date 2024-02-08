
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Services/>
      <h1>Creating the kitchen</h1>
      <About />
<Contact />
      <Footer />
    </div>
  );
}

export default App;
