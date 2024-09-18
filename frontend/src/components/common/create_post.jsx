import { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../shadcn/ui/dialog";
import Button from "./button";
import Field from "./field";
import "../../assets/styles/create_post.css";
import createPost from "../../functions/create_post";
import { useNavigate } from "react-router-dom";
import handleLogout from "../../functions/loggout";
/**
 * CreatePost - A React component that provides a form to create a new post.
 *
 * This component renders a dialog with a form that allows users to create a new post by providing a title and content. 
 * It handles form submission, including validation and posting the data to an API.
 */
function CreatePost() {
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate()

  // Redirect to login if token or user_id is not available
  if (!token || !user_id){
    handleLogout(navigate)
  }

  // State variables for form fields and loading state
  const [title, setTitle] = useState("");
  const [ErrorTitle, setErrorTitle] = useState("");
  const [text, setText] = useState("");
  const [ErrorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Handle form submission
  const handleSubmit = async (event) => {
    await createPost(event, user_id, token, setLoading, setErrorTitle, setErrorText, title, text, navigate)
  };
  return (
    <DialogContent className="sm:max-w-[726px] create_post_main">
      <DialogHeader>
        <DialogTitle className={"title"}>New Post</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="form">
          <div className="field">
            <div className="container title_field">
              <Field
                placeholder="Enter a title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            {ErrorTitle && <p className="error">{ErrorTitle}</p>}
          </div>
          <div className="field">
            <div className="container content_field">
              <Field
                placeholder="Enter your content"
                type="text"
                value={text}
                required
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            {ErrorText && <p className="error">{ErrorText}</p>}
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button
          text={loading ? "Loading..." : "Post"}
          type="cta_filled"
          onClick={handleSubmit}
        />
      </DialogFooter>
    </DialogContent>
  );
}
export default CreatePost;
