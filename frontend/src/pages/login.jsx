import Button from "../components/common/button";
import Navbar from "../components/common/navbar";
import "../assets/styles/login.css";
import Icon from "../assets/icons/icon";
import Field from "../components/common/field";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import countNumberOfDays from "../functions/count_number_of_days";
import countLevel from "../functions/count_level";
import { Card } from "../components/shadcn/ui/card";
import Logo from "../components/common/logo";
function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorEmail("");
    setErrorPassword("");

    let hasError = false;

    if (!email) {
      setErrorEmail("Email is required");
      hasError = true;
    } else {
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!emailRegex.test(email)) {
        setErrorEmail("Invalid email format");
        hasError = true;
      }
    }
    if (!password) {
      setErrorPassword("Password is required");
      hasError = true;
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:5050/api/v1/users/authenticate",
        {
          email,
          password,
        }
      );

      const img = response.data.user.img;
      localStorage.setItem("token", JSON.stringify(response.data.token));
     
      localStorage.setItem("user_id", JSON.stringify(response.data.user.id));
      

      navigate("/home");
    } catch (error) {
      console.error(error);
      setErrorPassword(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    
      <main className="login_main">
      <header className="authenticate_nav">
        <Link to={"/"}>
        <Logo/>
        </Link>
        <Link to={"/"} className="menu_item">
        <Icon name={"home"} size={24}/>
        </Link>
      </header>
       <section className="main_section" id="login_section">
       <Card className={"card"}>
       <div className="left_container">
          <div className="login">
            <div className="form">
              <div className="field">
                <div className="container">
                  <Icon name={"email_fill"} size={24} color={"grey"} />
                  <Field
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {errorEmail && <p className="error">{errorEmail}</p>}
              </div>
              <div className="field">
                <div className="container">
                  <Icon name={"lock"} size={24} color={"grey"} />
                  <Field
                    placeholder="********"
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errorPassword && <p className="error">{errorPassword}</p>}
              </div>

              <div className="submit">
                <Button
                  text={loading ? "Loging In..." : "LOGIN"}
                  type={"login_btn"}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
          <div className="alternative">
            <p>New here ?</p>
            <div>
              <Link to={"/signup"}>
                <Button text={"Create an account"} type={"signup_btn_link"} />
              </Link>
            </div>
          </div>
        </div>

        <div className="right_container">
          <p className="title">Welcome Back to Your Path</p>
          <p className="description">
            Log in to continue your healing journey and stay on track
          </p>
        </div>
       </Card>
       </section>
      </main>
    
  );
}
export default Login;
