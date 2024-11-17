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
    <DialogTrigger className="btn secondary_filled">
      <span> Create an article </span>
    </DialogTrigger>
     
    <DialogContent className="lg:min-w-[60vw] lg:max-w-[60vw] max-w-[90vw] min-w-[90vw] create_post_main flex flex-col gap-8 bg-[#f7f7f7] z-[999]">
      <DialogHeader className={"header text-black"}>
        <DialogTitle>
          <h2 className="text-center">New Article</h2>
        </DialogTitle>
      </DialogHeader>
        <div className=" flex flex-col gap-4 items-start">
          <div className=" flex flex-col gap-2 w-full ">
         
            <div className="rounded-[6px] border border-black  w-full h-8">
              <Field
                placeholder="Enter a title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                mode={"bg-transparent  "}
              />
            </div>
            {ErrorTitle && <p className="error">{ErrorTitle}</p>}
          </div>
          <div className="field flex flex-col gap-2 w-full">
            <div className="py-0 rounded-[6px] border border-black w-full h-8">
              <Field
                placeholder="Enter the author's name if not anonymous"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                mode={"bg-transparent"}
                
              />
            </div>
          </div>
          <div className="field flex flex-col gap-2 w-full">
            <div className="py-0 rounded-[6px] border border-black w-full h-8">
              <Field
                placeholder="Enter the image url if you have one"
                type="text"
                value={img}
                mode={"bg-transparent"}
                onChange={(e) => setImg(e.target.value)}
                
              />
            </div>
          </div>
          <div className=" flex flex-col gap-2 w-full">
            <div className="py-0 rounded-[6px] border border-black w-full  h-[98px]">
              <Field
                placeholder="Enter your content"
                type="text"
                value={content}
                mode={"bg-transparent"}
                required
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            {ErrorText && <p className="error">{ErrorText}</p>}
          </div>
        </div>
      <DialogFooter className={"self-center "}>
        <Button
          text={loading ? "Loading..." : "Post"}
          type="bg-[#51A2CF] rounded-[10px] p-3 text-white"
          onClick={handleSubmit}
        />
      </DialogFooter>
    </DialogContent>
</Dialog>
   
  );
}
export default Create_Article;
