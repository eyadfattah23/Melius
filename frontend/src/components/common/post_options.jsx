import Icon from "../../assets/icons/icon";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../shadcn/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "../shadcn/ui/dialog";
import EditPost from "./edit_post";
import deletePost from "../../functions/delete_post";
import handleLogout from "../../functions/loggout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
/**
 * `PostOptions` component provides options to edit or delete a post.
 * It uses a dropdown menu to display these options, and includes a dialog for editing the post.
 */

const PostOptions = ({ post_id, title, text }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
    
  // Redirects to logout if the token is not available
  if (!token){
    handleLogout(navigate)
  }
  
  
  //Handles the deletion of the post by calling the deletePost function.
  const handleDelete = async () => {
    await deletePost(post_id, token, setLoading, navigate)
  };
  return (
    <DropdownMenu>
      {" "}
      <DropdownMenuTrigger asChild>
        <button>
          <Icon name={"more"} size={24} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 post_options_dropdown">
        <DropdownMenuGroup>
          <Dialog>
            <DialogTrigger asChild>
              <div className={"menu_item"}>
                <Icon name={"pencil"} size={16} />
                <span>Edit Post</span>
              </div>
            </DialogTrigger>
            <EditPost title={title} text={text} post_id={post_id} />
          </Dialog>
          <DropdownMenuItem className={"menu_item"} onClick={handleDelete}>
            <Icon name={"delete"} size={16} />
            <span>Delete Post</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default PostOptions;
