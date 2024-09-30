import './sign_in.css';

const SignIn = () => {
    return (
        <section className="signin" id="signin">
        <div class="">
          <h2>Welcome Back</h2>
          <p>Sign in to your Gen-X account.</p>
          <form action="#">
            <div class="form-group">
              <label for="username">Username or Email</label>
              <input class="input" type="text" id="username" name="username" required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input class="input" type="password" id="password" name="password" required />
            </div>
            <button type="submit">Sign In</button>
            <a href="/">Forgot password?</a>
          </form>
        </div>
        </section>
    
    )
}

export default SignIn;