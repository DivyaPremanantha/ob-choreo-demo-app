import '../../css/Login.css'
import profile from "../../images/profile.png";
import email from "../../images/email.png";
import pass from "../../images/pass.png";




export function  LoginPage() {return (
      <div className="main">
        <div className="sub-main">
            <div>
                <div className="imgs">
                  <div className="container-image">
                    <img src={profile} alt="profile" className="profile"/>
                  </div>
                </div>
            <div>
            <div className="second-input">
                <img src={email} alt="email" className="email"/>
                    <input type="text" placeholder="user name" className="name"/>
            </div>
            <div className="second-input">
                <img src={pass} alt="pass" className="email"/>
                   <input type="password" placeholder="password" className="name"/>
            </div>
            <div className="login-button">
                <button>Login</button>
            </div>
        </div>
      </div>

      </div>
    </div>

    );};