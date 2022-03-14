import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
          <div className="loginLeft">
              <h3 className="loginLogo">Malongsocial</h3>
              <span className="loginDesc">Connect with friends and around the world on malongsocial</span>
          </div>
          <div className="loginRight">
              <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Repeat password" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">
                    Log into account
                </button>
              </div>
          </div>
      </div>
    </div>
  )
}
