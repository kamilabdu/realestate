import './App.css';
import './assets/js/script'
import Header from './components/Header/Header';
import Projects from './components/Projects.jsx';
import ThankYou from './components/ThankYou.jsx';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <ThankYou />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
