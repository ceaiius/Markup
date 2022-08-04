import "./styles/App.css"
import Community from './pages/Community';
import NavBar from './pages/Navbar';
import Social from "./pages/Social"
import Features from "./pages/Features";
import Members from "./pages/Members";
import DownloadApp from "./pages/Download";
import Latest from "./pages/Latest";
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
    <section className="download">
      <DownloadApp/>
    </section>
    <section className="latest">
      <Latest/>
    </section>
      
    
      
    </div>
  );
}

export default App;
