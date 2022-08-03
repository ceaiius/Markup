import "./styles/App.css"
import Community from './pages/Community';
import NavBar from './pages/Navbar';
import Social from "./pages/Social"
function App() {
  return (
    <div className="App">
    <section className='community'>
      <NavBar/>
      <Community/>
    </section>
    <section className='social'>
      <Social/>
    </section>
      
    
      
    </div>
  );
}

export default App;
