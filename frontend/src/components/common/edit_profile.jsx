import Avatar from "../avatar";
import Button from "../common/button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
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
import config from "../../config";
import fetchUser from "../../functions/fetch_user";
export default function Edit_Profile() {
  const navigate = useNavigate();
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const token = JSON.parse(localStorage.getItem("token"));
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [maxDays, setMaxDays] = useState(-1)
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(config.API_URL + `users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("username");
      localStorage.removeItem("user_id");
      localStorage.removeItem("token");
      navigate("/signup");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
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

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$%@#])[A-Za-z\d$%@#]{8,30}$/;
    if (password.length != 0 && !passwordRegex.test(password)) {
      setErrorPassword(
        "Password should have at least one numeral, one uppercase letter, one lowercase letter, and one symbol"
      );
      hasError = true;
    }

    if (password.length != 0 && password.length < 8) {
      setErrorPassword("Password should be at least 8 characters long");
      hasError = true;
    } else if (password.length > 30) {
      setErrorPassword("Password should not be greater than 30 characters");
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        config.API_URL + `users/${user_id}`,
        {
          email,
          username,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error(error);
      setErrorPassword(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
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
