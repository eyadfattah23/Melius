import Button from "../components/button"
import Navbar from "../components/navbar"
import "../assets/styles/login.css"
import Icon from "../assets/icons/icon"
import Field from "../components/field"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import countNumberOfDays from "../functions/count_number_of_days"
import countLevel from "../functions/count_level"
function Login(){
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const navigate = useNavigate()
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
            const response = await axios.post("http://127.0.0.1:5050/api/v1/users/authenticate", {
                email,
                password,
            });

            console.log(response);
            const img = response.data.user.img
            localStorage.setItem("username", JSON.stringify(response.data.user.username));
            localStorage.setItem("user_id", JSON.stringify(response.data.user.id));
            console.log(response.data.user.timer_reset_date)
            localStorage.setItem("number_of_days", JSON.stringify(countNumberOfDays(response.data.user.timer_reset_date)));
            localStorage.setItem("level", JSON.stringify(countLevel(countNumberOfDays(response.data.user.timer_reset_date))));
            navigate("/home");
        } catch (error) {
            console.error(error);
            setErrorPassword(error.response?.data?.error || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    return<>
    <Navbar/>
    <section className="login_section">
        <div className="left_container">
            <div className="user">
                <Icon name={"user"} size={96} color={"white"}/>
            </div>
            <div className="login">
                <div className="form">
                    <div className="field">
                       <div className="container">
                       <Icon name={"email_fill"} size={24} color={"white"}/> 
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
                        <Icon name={"lock"} size={24} color={"white"}/> 
                    <Field 
                    placeholder="********"
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    {errorPassword && <p className="error">{errorPassword}</p>}
                    </div>

                    <div className="submit">
                        <Button text={loading ? "Loging In..." : "LOGIN"} type={"login_btn"} onClick={handleSubmit}/>
                    </div>
                </div>
                <p>Forgot your password ?</p>
            </div>
            <div className="alternative">
            <p>New here ?</p>
            <div>
                <Link to={"/signup"}>
                <Button text={"Create an account"} type={"signup_btn_link"}/>
                </Link>
            </div>
        </div>
        </div>
       
        <div className="right_container">
            <p className="title">Welcome Back to Your Path</p>
            <p className="description">Log in to continue your healing journey and stay on track</p>
        </div>
    </section>
    </>
}
export default Login