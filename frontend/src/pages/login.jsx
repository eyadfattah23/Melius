import Button from "../components/button"
import Navbar from "../components/navbar"
import "../assets/styles/login.css"
import Icon from "../assets/icons/icon"
import Field from "../components/field"
<<<<<<< HEAD
function Login(){
=======
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
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
            const user = response.data.username
            const img = response.data.img
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("loggedin", JSON.stringify(true));
            navigate("/home");
        } catch (error) {
            console.error(error);
            setErrorPassword(error.response?.data?.error || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };
>>>>>>> bc0557d... handle api connections for challenge and home page
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
                       <Icon name={"user_fill"} size={24} color={"white"}/> 
                       <Field placeholder={"Username"} type={"text"}/>
                    </div>
                    <div className="field">
                    <Icon name={"lock"} size={24} color={"white"}/> 
                    <Field placeholder={"********"} type={"password"}/>
                    </div>
                    <div className="submit">
                        <Button text={"LOGIN"} type={"login_btn"}/>
                    </div>
                </div>
                <p>Forgot your password ?</p>
            </div>
            <div className="alternative">
            <p>New here ?</p>
            <div>
            <Button text={"Create an account"} type={"signup_btn_link"}/>
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