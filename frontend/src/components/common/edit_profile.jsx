import Avatar from "../avatar";
import Button from "../common/button";
import { useState } from "react";
import { useEffect } from "react";
import Leader_card from "./leader_card";
import "../../assets/styles/common/edit_profile.css";
import countLevel from "../../functions/count_level";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../components/shadcn/ui/dialog";
import Field from "../common/field";
import Icon from "../../assets/icons/icon";
import { useNavigate } from "react-router-dom";
import fetchUser from "../../functions/fetch_user";
import deleteProfile from "../../functions/delete_profile";
import handleLogout from "../../functions/loggout";
import editProfile from "../../functions/edit_profile";
/**
 * Edit_Profile Component
 * 
 * This component handles user profile editing. It fetches user details, allows the user to update 
 * their username, email, and password, and provides options to save changes or delete their account.
 */
export default function Edit_Profile() {
  const navigate = useNavigate();
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const token = JSON.parse(localStorage.getItem("token"));
  
  // If no user_id or token exists, log the user out
  if (!user_id || !token){
    handleLogout(navigate)
  }

  // State variables to manage user inputs, errors, and loading state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [maxDays, setMaxDays] = useState(-1)
  const [loading, setLoading] = useState(false);
  
  // Handles profile deletion
  const handleDelete = async () => {
    await deleteProfile(user_id, token, setLoading, navigate)
  };
  
  // Handles form submission to update profile
  const handleSubmit = async (event) => {
    await editProfile(event, user_id, token, setLoading, setErrorEmail, setErrorUsername, setErrorPassword, email, username, password, navigate)
  };
  // Fetch user data when the component is mounted
  useEffect(() => {
    fetchUser(user_id, token, setUsername, setMaxDays, navigate, setEmail, null);
  }, []);

  return (
    <DialogContent className="sm:max-w-[726px] edit_profile">
      <DialogHeader className={"header"}>
        <Leader_card name={username} badge={<Avatar level={`${countLevel(Number(maxDays))}`}/>} />
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
          <Button
            text={loading ? "Loading..." : "Delete Account"}
            type="btn_delete"
            icon={<Icon size={24} name={"delete"} />}
            onClick={handleDelete}
          />
          <Button
            text={loading ? "Loading..." : "Save Changes"}
            type="cta_filled"
            onClick={handleSubmit}
          />
        </div>
      </DialogFooter>
    </DialogContent>
  );
}
