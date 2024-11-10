import Button from "../components/common/button";
import "../assets/styles/login.css";
import Icon from "../assets/icons/icon";
import Field from "../components/common/field";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../components/common/logo";
import login from "../functions/login";
/**
 * provides a user authentication interface where users can log in with their email and password.
 * It includes form validation, error handling, and redirection upon successful login.
 */

function Login() {
  // State hooks for managing form input and validation
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event) => {
    login(event, setLoading, setErrorEmail, setErrorPassword, email, password, navigate);
  };
  return (
    <main className="py-8 px-16 login_main">
  <header className="flex justify-between authenticate_nav" >
    <Link to={"/"}>
      <Logo />
    </Link>
    <Link to={"/"} className="cursor-pointer menu_item">
      <Icon name={"home"} size={24} />
    </Link>
  </header>
  
  <section className="flex flex-col-reverse lg:flex-row justify-center gap-8 main_section" id="login_section">
    <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center py-8 left_container">
      <div className="space-y-6">
        <div className="flex items-center gap-4 border border-gray-300 rounded px-4 py-2">
          <Icon name={"email_fill"} size={24} color={"grey"} />
          <Field
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {errorEmail && <p className="text-red-500 text-sm">{errorEmail}</p>}
        
        <div className="flex items-center gap-4 border border-gray-300 rounded px-4 py-2">
          <Icon name={"lock"} size={24} color={"grey"} />
          <Field
            placeholder="********"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorPassword && <p className="text-red-500 text-sm">{errorPassword}</p>}
      </div>
      
      <div className="mt-6">
        <Button
          text={loading ? "Logging In..." : "LOGIN"}
          onClick={handleSubmit}
          type="login_btn"
        />
      </div>
      
      <div className="flex items-center gap-2 alternative">
        <p>New here?</p>
        <Link to={"/signup"}>
          <Button text={"Create an account"} type="signup_btn_link" />
        </Link>
      </div>
    </div>

    <div className="text-center  w-full lg:w-1/2 p-8 flex flex-col justify-center right_container py-8">
      <p className="title">Welcome Back to Your Path</p>
      <p className="description">Log in to continue your healing journey and stay on track</p>
    </div>
  </section>
</main>

  );
}
export default Login;
