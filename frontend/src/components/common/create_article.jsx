import { useState } from "react";
import {
    Dialog,
    DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../shadcn/ui/dialog";
import Button from "./button";
import Field from "./field";
import axios from "axios";
import "../../assets/styles/create_post.css";
import config from "../../config";
function Create_Article() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [title, setTitle] = useState("");
  const [ErrorTitle, setErrorTitle] = useState("");
  const [img, setImg] = useState("")
  const [content, setContent] = useState("");
  const [ErrorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState("")
  const [ErrorAuthor, setErrorAuthor] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorTitle("");
    setErrorText("");

    let hasError = false;
    if (!title) {
      setErrorTitle("Please fill the title field");
      hasError = true;
    }
    if (!content) {
      setErrorText("Please fill the content field");
      hasError = true;
    }
    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        config.API_URL + "articles",
        {
          title,
          content,
          author,
          img
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
    <Dialog>
    <DialogTrigger className="btn cta_filled">
      <span> Create an article </span>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[726px] create_post_main">
      <DialogHeader>
        <DialogTitle className={"title"}>New Article</DialogTitle>
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
            <div className="container title_field">
              <Field
                placeholder="Enter the author's name if not anonymous"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                
              />
            </div>
          </div>
          <div className="field">
            <div className="container title_field">
              <Field
                placeholder="Enter the image url if you have one"
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                
              />
            </div>
          </div>
          <div className="field">
            <div className="container content_field">
              <Field
                placeholder="Enter your content"
                type="text"
                value={content}
                required
                onChange={(e) => setContent(e.target.value)}
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
</Dialog>
   
  );
}
export default Create_Article;
