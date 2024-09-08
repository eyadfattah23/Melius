import Icon from "../assets/icons/icon"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "./shadcn/ui/dropdown-menu"
import { Dialog, DialogTrigger } from "./shadcn/ui/dialog"
import axios from "axios"
const PostOptions =({post_id}) =>{
    const handleDelete =async() =>{
        try {
            const response = await axios.delete(`http://127.0.0.1:5050/api/v1/posts/${post_id}`) 
            window.location.reload()         
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
      }
    return  <DropdownMenu> <DropdownMenuTrigger asChild>
    <button><Icon name={"more"} size={24}/></button>
</DropdownMenuTrigger>
<DropdownMenuContent className="w-56">
<DropdownMenuGroup>
<Dialog>
  <DialogTrigger asChild>
  <div className={"menu_item"}>
  <Icon name={"pencil"} size={16} />
 <span>Edit Post</span>
 </div>
  </DialogTrigger>
  {/* <Edit_Profile/> */}
</Dialog> 
<DropdownMenuItem className={"menu_item"} onClick={handleDelete}>
<Icon name={"delete"} size={16}/>
<span>Delete Post</span>
</DropdownMenuItem>
</DropdownMenuGroup>
</DropdownMenuContent>
</DropdownMenu>
}
export default PostOptions