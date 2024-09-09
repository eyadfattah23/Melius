import { useState } from "react"
import { DialogContent, DialogHeader,DialogTitle, DialogFooter } from "../components/shadcn/ui/dialog"
import Button from "../components/common/button"
import Field from "../components/field"
import axios from "axios"
import "../assets/styles/create_post.css"
function CreatePost(){
    const user_id = JSON.parse(localStorage.getItem("user_id"))
    const [title, setTitle] = useState("")
    const [ErrorTitle, setErrorTitle] = useState("")
    const [text, setText] = useState("")
    const [ErrorText, setErrorText] = useState("")
    const [loading, setLoading]= useState(false)
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
        if (!text) {
            setErrorText("Please fill the content field");
            hasError = true;
        }
        if (hasError) {
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:5050/api/v1/posts", {
                user_id,
                title,
                text,
            });

            console.log(response);
            window.location.reload()
        } catch (error) {
            console.error(error);
            setErrorPassword(error.response?.data?.error || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    return <DialogContent className="sm:max-w-[726px] create_post_main">
    <DialogHeader >
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
    <Button text={loading ? "Loading..." : "Post"} type="primary" onClick={handleSubmit} />
    </DialogFooter> 
 </DialogContent>
}
export default CreatePost