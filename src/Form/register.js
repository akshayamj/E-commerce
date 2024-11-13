function Register() {
  return (
    <form>
      <label>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={Register}>Register</button>
      </label>
    </form>
  );
}

export default Register;
