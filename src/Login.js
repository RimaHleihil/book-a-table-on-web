import "./App.css";

const sectionStyle = {
  textAlign: "center",
  padding: "1.5rem",
};

function Login() {
  return (
    <div className="container" style={sectionStyle}>
      <h1 className="title">Welcome to the Login Page</h1>
      <div className="row">
        <h2>Login</h2>
        <div>
          <label for="email">Email</label> <br></br>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="password">Password</label> <br></br>
          <input type="password" id="password" name="password" required />
        </div>
        <div style={{marginTop: "1rem"}}>
        <button type="submit">Login</button>
        </div>
      </div>
      <div className="row" style={{marginTop: "4rem"}}>
        <h2>Sign Up</h2>
        <div>
          <label for="user_first_name">First Name</label> <br></br>
          <input
            type="text"
            id="user_first_name"
            name="user_first_name"
            required
          />
        </div>
        <div>
          <label for="user_last_name">Last Name</label> <br></br>
          <input
            type="text"
            id="user_last_name"
            name="user_last_name"
            required
          />
        </div>
        <div>
          <label for="user_email">Email</label> <br></br>
          <input type="email" id="user_email" name="user_email" required />
        </div>
        <div>
          <label for="user_password">Password</label> <br></br>
          <input
            type="password"
            id="user_password"
            name="user_password"
            required
            minlength="6"
            maxlength="60"
          />
        </div>
        <div>
          <label for="user_confirm_password">Confirm Password</label> <br></br>
          <input
            type="password"
            id="user_confirm_password"
            name="user_confirm_password"
            required
            minlength="6"
            maxlength="60"
          />
        </div>
        <div>
          <label for="phone">Phone</label> <br></br>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <label for="gallery">Add your picture</label> <br></br>
          <input type="file" id="gallery" name="gallery" multiple />
        </div>
        <div>
          <button type="submit" style={{marginTop: "1rem"}}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;