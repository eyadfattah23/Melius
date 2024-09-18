import Button from "../common/button";
import { useState } from "react";
import "../../assets/styles/common/edit_profile.css";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/shadcn/ui/dialog";
import Field from "../common/field";
import handleLogout from "../../functions/loggout";
import { useNavigate } from "react-router-dom";
import editPost from "../../functions/edit_post";

/**
 * `Create_Article` Component
 * 
 * This component renders a dialog that allows users to create a new article. It includes fields for the article title,
 * author name, image URL, and content. The component uses a dialog for the form and a button to trigger the form submission.
 */
export default function EditPost({ post_id, title, text }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate()
  
  // Redirect to logout if the token is not present
  if (!token)[
    handleLogout(navigate)
  ]

  // State variables for form fields and submission
  const [postTitle, setTitle] = useState(title);
  const [ErrorTitle, setErrorTitle] = useState("");
  const [postText, setText] = useState(text);
  const [ErrorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  
  //Handle form submission
  const handleSubmit = async (event) => {
    await editPost(event, post_id, token, setLoading, setErrorTitle, setErrorText, postTitle, postText, navigate)
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
                value={postTitle}
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
                value={postText}
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
