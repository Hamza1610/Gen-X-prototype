import Footer from './components/footer';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import logo from './logo.svg';
import './App.css';
import Feature from './components/Feartures';
import Benefits from './components/Benefits';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header class="hero">
        <div class="container">
          <h1>Introducing Gen-X</h1>
          <p>The AI-powered voice shell executor, built for the future.</p>
          <a href="#" class="btn">Explore now</a>
          <a href="#signup" class="btn secondary">Sign Up</a>
        </div>
      </header>

      <section class="audio">
        <i class="fa fa-file-audio-o" aria-hidden="true"></i>
        <div></div>
      </section>
      <Feature />
      <Benefits />
      <About />
      {/* SignUp */}
      <SignUp />
      {/* Sign in */}
      <SignIn />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
