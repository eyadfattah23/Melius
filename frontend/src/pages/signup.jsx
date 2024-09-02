import Button from "../components/button";
import Navbar from "../components/navbar";
import "../assets/styles/signup.css";
import Icon from "../assets/icons/icon";
import Field from "../components/field";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorEmail("");
        setErrorUsername("");
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

        if (!username) {
            setErrorUsername("Username is required");
            hasError = true;
        }

        if (!password) {
            setErrorPassword("Password is required");
            hasError = true;
        } else {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$%@#])[A-Za-z\d$%@#]{8,30}$/;
            if (!passwordRegex.test(password)) {
                setErrorPassword("Password should have at least one numeral, one uppercase letter, one lowercase letter, and one symbol");
                hasError = true;
            }
        }

        if (password.length < 8) {
            setErrorPassword("Password should be at least 8 characters long");
            hasError = true;
        }
        if (password.length > 30) {
            setErrorPassword("Password should not be greater than 30 characters");
            hasError = true;
        }

        if (hasError) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:5050/api/v1/users", {
                email,
                username,
                password,
            });

            console.log(response);
            const user = response.data.username
            const img = response.data.img
            const id = response.data.id
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("loggedin", JSON.stringify(true));
            localStorage.setItem("user_id", JSON.stringify(id))
            navigate("/home");
        } catch (error) {
            console.error(error);
            setErrorPassword(error.response?.data?.error || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <section className="signup_section">
                <div className="right_container">
                    <p className="title">Join Us in Your Journey to Freedom</p>
                    <p className="description">Create your account and take the first step towards a healthier, more fulfilling life.</p>
                </div>
                <div className="left_container">
                    <div className="user">
                        <Icon name={"user"} size={96} />
                    </div>
                    <div className="signup">
                        <div className="form">
                            <div className="field">
                                <div className="container">
                                    <Icon name={"email_fill"} size={24} />
                                    <Field
                                        placeholder="Enter your email"
                                        type="email"
                                        mode="dark"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                {errorEmail && <p className="error">{errorEmail}</p>}
                            </div>
                            <div className="field">
                                <div className="container">
                                    <Icon name={"user_fill"} size={24} />
                                    <Field
                                        placeholder="Enter your username"
                                        type="text"
                                        mode="dark"
                                        value={username}
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                {errorUsername && <p className="error">{errorUsername}</p>}
                            </div>
                            <div className="field">
                                <div className="container">
                                    <Icon name={"lock"} size={24} />
                                    <Field
                                        placeholder="Enter your password"
                                        type="password"
                                        mode="dark"
                                        value={password}
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {errorPassword && <p className="error">{errorPassword}</p>}
                            </div>
                            <div className="submit">
                                <Button text={loading ? "Signing Up..." : "SIGN UP"} type="singup_btn" onClick={handleSubmit} />
                            </div>
                        </div>
                    </div>
                    <div className="alternative">
                        <p>Already have an account?</p>
                        <div>
                            <Link to={"/login"}>
                                <Button text={"Login"} type={"signup_btn_link"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;