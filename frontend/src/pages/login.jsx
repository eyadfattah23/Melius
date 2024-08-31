import Button from "../components/button"
import Navbar from "../components/navbar"
import "../assets/styles/login.css"
import Icon from "../assets/icons/icon"
import Field from "../components/field"
function Login(){
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