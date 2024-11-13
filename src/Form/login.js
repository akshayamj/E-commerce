function Login() {
  return (
    <form>
      <label>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <a href="/forgot-password">Forgot Password?</a>
        <a href="/signup">Sign Up</a>
      </label>
    </form>
  );
}

export default Login;
