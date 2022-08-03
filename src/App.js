import "./styles/App.css"
import Community from './pages/Community';
import NavBar from './pages/Navbar';
import Social from "./pages/Social"
import Features from "./pages/Features";
import Members from "./pages/Members";
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
    <section className="features">
      <Features/>
    </section>
    <section className="members">
      <Members/>
    </section>
      
    
      
    </div>
  );
}

export default App;
