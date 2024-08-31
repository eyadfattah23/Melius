import Button from "../components/button"
import Navbar from "../components/navbar"
import "../assets/styles/signup.css"
import Icon from "../assets/icons/icon"
import Field from "../components/field"
function Singup(){
    return<>
    <Navbar/>
    <section className="signup_section">
    <div className="right_container">
            <p className="title">Join Us in Your Journey to Freedom</p>
            <p className="description">Create your account and take the first step towards a healthier, more fulfilling life.</p>
        </div>
        <div className="left_container">
            <div className="user">
                <Icon name={"user"} size={96}/>
            </div>
            <div className="signup">
                <div className="form">
                    <div className="field">
                       <Icon name={"user_fill"} size={24} /> 
                       <Field placeholder={"Enter your username"} type={"text"} mode={"dark"}/>
                    </div>
                    <div className="field">
                    <Icon name={"lock"} size={24} /> 
                    <Field placeholder={"Enter your password"} type={"password"} mode={"dark"}/>
                    </div>
                    <div className="submit">
                        <Button text={"SIGNUP"} type={"singup_btn"}/>
                    </div>
                </div>
            </div>
            <div className="alternative">
            <p>Already have an account ?</p>
            <div>
            <Button text={"signup"} type={"signup_btn_link"}/>
            </div>
        </div>
        </div>
       
       
    </section>
    </>
}
export default Singup