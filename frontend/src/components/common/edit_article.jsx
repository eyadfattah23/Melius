import Button from "../common/button";
import { useState } from "react";
import axios from "axios";
import "../../assets/styles/common/edit_profile.css";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Dialog, DialogTrigger
} from "../../components/shadcn/ui/dialog";
import Field from "../common/field";
import config from "../../config";

export default function Edit_Article({ articleId, initialTitle, initialContent, initialImage }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [articleTitle, setArticleTitle] = useState(initialTitle);
  const [articleContent, setArticleContent] = useState(initialContent);
  const [articleImage, setArticleImage] = useState(initialImage || "");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");
  const [errorImage, setErrorImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorTitle("");
    setErrorContent("");
    setErrorImage("");

    // Validate the input fields
    let hasError = false;
    if (articleTitle.trim() === "") {
      setErrorTitle("Title is required.");
      hasError = true;
    }
    if (articleContent.trim() === "") {
      setErrorContent("Content is required.");
      hasError = true;
    }
    if (articleImage.trim() === "") {
      setErrorImage("Image URL is required.");
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        `${config.API_URL}/articles/${articleId}`,
        {
          title: articleTitle,
          content: articleContent,
          image: articleImage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Article updated successfully:", response);
      window.location.reload(); // Reload the page after successful update
    } catch (error) {
      console.error("Error updating article:", error);
      setErrorContent(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
                required
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
                required
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
                required
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
