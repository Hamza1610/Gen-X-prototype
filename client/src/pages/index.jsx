import Footer from '../components/footer';
import SignUp from '../components/sign_up';
import '../styles/App.css';
import Feature from '../components/Feartures';
import Benefits from '../components/Benefits';
import About from '../components/About';

function LangingPage() {
  return (
    <div className="App">
      <header class="hero">
        <div class="container">
          <h1>Introducing Gen-X</h1>
          <p>The AI-powered voice shell executor, built for the future.</p>
          <a href="/get-started" class="btn">Get started</a>
          <a href="#signup" class="btn">Sign Up</a>
        </div>
      </header>

      <section class="sections">
        <Feature />
        <Benefits />
        <About />
        {/* SignUp */}
        <SignUp />
        {/* Sign in */}
        {/* <SignIn /> */}
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LangingPage;
