import Button from "../common/button";
import { useState } from "react";
import axios from "axios";
import "../../assets/styles/common/edit_profile.css";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/shadcn/ui/dialog";
import Field from "../common/field";
import config from "../../config";
export default function EditPost({ post_id, title, text }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [postTitle, setTitle] = useState(title);
  const [ErrorTitle, setErrorTitle] = useState("");
  const [postText, setText] = useState(text);
  const [ErrorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorTitle("");
    setErrorText("");

    let hasError = false;
    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        config.API_URL + "posts/" + post_id,
        {
          title: postTitle,
          text: postText,
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
      setErrorText(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
