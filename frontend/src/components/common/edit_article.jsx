import Button from "../common/button";
import { useState } from "react";
import "../../assets/styles/common/edit_profile.css";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Dialog, DialogTrigger
} from "../../components/shadcn/ui/dialog";
import Field from "../common/field";
import handleLogout from "../../functions/loggout";
import { useNavigate } from "react-router-dom";
import editArticle from "../../functions/edit_article";
/**
 * Edit_Article - A React component that allows the user to edit an existing article.
 * 
 * This component renders a form inside a modal dialog to update the article's title, content, and optional image URL.
 * It leverages the `editArticle` function to send the update request to the backend.
 */
export default function Edit_Article({ articleId, initialTitle, initialContent, initialImage }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate()
  // Redirect if token is not present
  if (!token){
    handleLogout(navigate)
  }

  // Component state management for form fields and error messages
  const [articleTitle, setArticleTitle] = useState(initialTitle);
  const [articleContent, setArticleContent] = useState(initialContent);
  const [articleImage, setArticleImage] = useState(initialImage || "");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");
  const [errorImage, setErrorImage] = useState("");
  const [loading, setLoading] = useState(false);

  //Validates form fields and triggers the `editArticle` function to update the article.
  const handleSubmit = async (event) => {
    await editArticle(event, articleId, token, setLoading, setErrorTitle, setErrorContent, setErrorImage, articleTitle, articleContent, articleImage, navigate)
  };

  return (
    <Dialog>
    <DialogTrigger className="btn cta_filled">
      <span> Edit Article </span>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[726px] edit_profile">
      <DialogHeader>
        <DialogTitle className={"title"}>Edit Article</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="form">
          {/* Title field */}
          <div className="field">
            <div className="container title_field">
                
              <Field
                placeholder="Enter a title"
                type="text"
                value={articleTitle}
                onChange={(e) => setArticleTitle(e.target.value)}
              />
            </div>
            {errorTitle && <p className="error">{errorTitle}</p>}
          </div>

          {/* Content field */}
          <div className="field">
            <div className="container content_field">
              <Field
                placeholder="Enter your content"
                type="text"
                value={articleContent}
                onChange={(e) => setArticleContent(e.target.value)}
              />
            </div>
            {errorContent && <p className="error">{errorContent}</p>}
          </div>

          {/* Image URL field */}
          <div className="field">
            <div className="container image_field">
              <Field
                placeholder="Enter image URL"
                type="text"
                value={articleImage}
                onChange={(e) => setArticleImage(e.target.value)}
              />
            </div>
            {errorImage && <p className="error">{errorImage}</p>}
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button
          text={loading ? "Loading..." : "Save Changes"}
          type="cta_filled"
          onClick={handleSubmit}
        />
      </DialogFooter>
    </DialogContent>
    </Dialog>
  );
}
