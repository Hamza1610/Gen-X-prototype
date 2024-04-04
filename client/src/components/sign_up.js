import './sign_up.css';

const SignUp = () => {
    return (
        <section class="signup" id="signup">
        <div class="container">
          <h2>Join the Future</h2>
          <p>Sign up to be part of the Gen-X revolution.</p>
          <form action="#">
            <div class="form-group">
              <label for="email">Email</label>
              <input class="input" type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input class="input" type="password" id="password" name="password" required />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <a href="#signin">Sign in here.</a></p>
        </div>
        </section>
    
    )
}

export default SignUp;