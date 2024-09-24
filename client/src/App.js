import Footer from './components/footer';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import logo from './logo.svg';
import './App.css';

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

      <section class="features">
        <div class="container">
          <h2>Unleash the Power of AI</h2>
          <div class="features-grid">
            <div class="feature">
              <i class="fas fa-microphone"></i> <h3>Speak Your Commands</h3>
              <p>Effortlessly control your computer with natural language.</p>
            </div>
            <div class="feature">
              <i class="fas fa-code"></i> <h3>Command Across Platforms</h3>
              <p>Execute complex tasks across diverse operating systems.</p>
            </div>
            <div class="feature">
              <i class="fas fa-brain"></i> <h3>AI-powered Learning</h3>
              <p>Gen-X adapts to your needs, becoming more efficient over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="benefits">
        <div class="container benefit_div">
          <h2>Benefits for Everyone</h2>
          <div class="benefit-list">
            <ul>
                <li><b>Developers:</b> 
                    Code with ease using natural language interaction. Imagine translating complex programming concepts into simple voice commands. Gen-X understands your intent and translates it into the appropriate code, allowing you to focus on the logic and functionality of your program. This intuitive approach streamlines development workflows, saving time and reducing the cognitive load associated with traditional coding methods.
                </li>
                <li><b>System Admins:</b>   
                    Manage complex networks with voice control. Imagine issuing commands like "restart server two" or "diagnose network latency on subnet 192.168.1.0/24" to automate routine tasks and troubleshoot network issues. Gen-X eliminates the need to navigate through intricate menus and interface configurations, saving valuable time and reducing the risk of human error. This voice-controlled approach allows system admins to maintain efficient network operations and respond to critical situations in a timely manner.
                </li>
                <li><b>Casual Users:</b>
                    Bridge the technology gap with intuitive AI assistance.  Gen-X empowers users of all technical backgrounds to navigate their computers with confidence. Whether you're new to computers or simply find traditional interfaces overwhelming, Gen-X offers a user-friendly voice interface that removes the need for technical knowledge. Ask Gen-X to open specific applications, search for information online, or complete basic tasks, all through natural language. This seamless interaction empowers everyone to utilize the full potential of their computers and participate in the digital world.
                </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="about">
        <div class="container first_container">
          <h2>Glimpse into the Future of AI-powered Operating Systems</h2>
          <div class="second_container">

              <p>
                Gen-X is not just another voice assistant. It is the culmination of cutting-edge AI technology combined with the versatility of a shell executor, designed to streamline and revolutionize your computing experience across various operating systems.
                Imagine a world where you can effortlessly navigate through complex tasks on your computer simply by speaking commands naturally, without the need to memorize intricate commands or navigate through menus. Gen-X brings this vision to life.
              </p>
              <p>
                With Gen-X, you can seamlessly execute shell commands on a variety of operating systems, from Windows to macOS to Linux, all with the power of your voice. Whether you're managing files, running scripts, or performing system configurations, Gen-X is your intelligent companion, ready to assist you at every step.
              </p>
              <p>
                But Gen-X is more than just a shell executor. It is the foundation of a future AI-powered operating system. Imagine an operating system that understands your preferences, anticipates your needs, and adapts to your workflow seamlessly. Gen-X paves the way for this vision, serving as the cornerstone of a next-generation computing environment.
              </p>
              <p>
                Picture a world where your operating system learns from your interactions, continuously refining its capabilities to better serve you. Gen-X is the first step towards realizing this future, harnessing the power of AI to create a personalized computing experience like never before.
              </p>
              <p>
                As we unveil this prototype today, I invite you to envision the endless possibilities that Gen-X brings to the table. From simplifying complex tasks to shaping the future of computing, Gen-X is poised to redefine the way we interact with technology.
              </p>
              <p>
                Together, let us embark on this journey towards a future where AI-driven innovation empowers us to achieve more than we ever thought possible. Thank you.
              </p>
          </div>
        </div>
      </section>
      <section class="audio">
        <i class="fa fa-file-audio-o" aria-hidden="true"></i>
        <div></div>
      </section>
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
