import '../styles/sign_up.css';

const SignUp = () => {
    return (
        <section class="signup" id="signup">
          <form class="signup-form">
            <h2>Join the Future</h2>
            <p>Join us by signing up here</p>
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
            {/* <p>Already have an account? <a href="#signin">Sign in here.</a></p> */}
          </form>
        </section>
    
    )
}

export default SignUp;