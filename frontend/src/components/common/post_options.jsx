import Icon from "../../assets/icons/icon";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../shadcn/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "../shadcn/ui/dialog";
import axios from "axios";
import EditPost from "./edit_post";
import config from "../../config";
const PostOptions = ({ post_id, title, text }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const handleDelete = async () => {
    try {
      const response = await axios.delete(config.API_URL + `posts/${post_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
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
