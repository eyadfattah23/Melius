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
import "../../assets/styles/create_post.css";
import createArticle from "../../functions/create_article";
import { useNavigate } from "react-router-dom";
import handleLogout from "../../functions/loggout";

/**
 * `Create_Article` Component
 * 
 * This component renders a dialog that allows users to create a new article. It includes fields for the article title,
 * author name, image URL, and content. The component uses a dialog for the form and a button to trigger the form submission.
 */
function Create_Article() {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate()
  // Redirect to logout if the token is not present
  if (!token){
    handleLogout(navigate)
  }
  // State variables for form fields and submission
  const [title, setTitle] = useState("");
  const [ErrorTitle, setErrorTitle] = useState("");
  const [img, setImg] = useState("")
  const [content, setContent] = useState("");
  const [ErrorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState("")
  
  // handles the form submission event, validates the inputs, and calls the `createArticle` function
  const handleSubmit = async (event) => {
    await createArticle(event, token, setLoading, setErrorTitle, setErrorText, title, content, author, img, navigate)
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
