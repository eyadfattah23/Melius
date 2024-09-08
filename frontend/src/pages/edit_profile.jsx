import Avatar from "../components/avatar"
import Button from "../components/button"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "../assets/styles/edit_profile.css"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle} from "../components/shadcn/ui/dialog"
import Field from "../components/field"
import Leader_card from "../components/leader_card"
import Icon from "../assets/icons/icon"
import { useNavigate } from "react-router-dom"
export default function Edit_Profile() {
  const navigate = useNavigate()
  const user_id = JSON.parse(localStorage.getItem("user_id"))
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleDelete =async() =>{
    try {
        const response = await axios.delete(`http://127.0.0.1:5050/api/v1/users/${user_id}`) 
        localStorage.removeItem("username");
      localStorage.removeItem("user_id");
      localStorage.removeItem("number_of_days");
      localStorage.removeItem("level");
      navigate("/signup")         
    } catch (error) {
        console.error(error);
    } finally {
       setLoading(false);
    }
  }  
  const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      setErrorEmail("");
      setErrorUsername("");
      setErrorPassword("");
      let hasError = false;

          const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          if (!emailRegex.test(email)) {
              setErrorEmail("Invalid email format");
              hasError = true;
          }       

          const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$%@#])[A-Za-z\d$%@#]{8,30}$/;
          if (password.length != 0 && !passwordRegex.test(password)) {
              setErrorPassword("Password should have at least one numeral, one uppercase letter, one lowercase letter, and one symbol");
              hasError = true;
          }
  

       if (password.length != 0 && password.length < 8) {
           setErrorPassword("Password should be at least 8 characters long");
          hasError = true;
      }
      else if (password.length > 30) {
          setErrorPassword("Password should not be greater than 30 characters");
          hasError = true;
      }

      if (hasError) {
          setLoading(false);
          return;
      }

      try {
          const response = await axios.put(`http://127.0.0.1:5050/api/v1/users/${user_id}`, {
              email,
              username,
              password,
          });

          console.log(response);
          window.location.reload()
          // localStorage.setItem("username", JSON.stringify(response.data.username));
          // localStorage.setItem("user_id", JSON.stringify(response.data.id));
          // localStorage.setItem("number_of_days", JSON.stringify(null));
          // localStorage.setItem("level", JSON.stringify(null));
      } catch (error) {
          console.error(error);
          setErrorPassword(error.response?.data?.error || "An error occurred. Please try again.");
      } finally {
          setLoading(false);
      }
  };
  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5050/api/v1/users/${user_id}`, {
              });
              setUsername(response.data.username)
              setEmail(response.data.email)
           
        } catch (error) {
            console.error(error);
        } finally {
            
        }
    };
    fetchUser()
}, [user_id]);

  return (
      <DialogContent className="sm:max-w-[726px] edit_profile">
        <DialogHeader>
          <Leader_card name={username} badge={<Avatar level={"2"}/>}/>
        </DialogHeader>
         
        <div className="grid gap-4 py-4">
        <div className="form">
                            <div className="field">
                                <div className="container title_field">
                                    <Field
                                        placeholder="Enter a title"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        
                                    />
                                </div>
                                {errorUsername && <p className="error">{errorUsername}</p>}
                            </div>
                            <div className="field">
                                <div className="container title_field">
                                    <Field
                                        placeholder="Email"
                                        type="email"
                                        value={email}
      
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                {errorEmail && <p className="error">{errorEmail}</p>}
                            </div>
                            <div className="field">
                                <div className="container title_field">
                                    <Field
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {errorPassword && <p className="error">{errorPassword}</p>}
                            </div>
                        </div>
        </div>
        <DialogFooter className={"footer"}>
       <div>
       <Button text={loading ? "Loading..." : "Delete Account"} type="btn_delete"   icon={<Icon size={24} name={"delete"}/>} onClick={handleDelete}/>        
       <Button text={loading ? "Loading..." : "Save Changes"} type="primary" onClick={handleSubmit}/>        
       </div>
        </DialogFooter> 
     </DialogContent>
   
  )
}

