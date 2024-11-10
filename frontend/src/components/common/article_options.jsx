import Icon from "../../assets/icons/icon";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../shadcn/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import handleLogout from "../../functions/loggout";
import Edit_Article from "./edit_article";
import { useState } from "react";
import deleteArticle from "../../functions/delete_article";
/**
 * `ArticleOptions` component provides options for editing or deleting an article.
 * It displays a dropdown menu with options to edit or delete the article.
 * Handles authentication by checking if the token is available.
 */
const ArticleOptions = ({ articleId, initialTitle, initialContent, initialImage }) => {
    const [loading, setLoading] = useState(false)
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate()
  // Check for token and handle logout if not present
  if (!token){
    handleLogout(navigate)
  }

  //Handles the deletion of the article by calling the `deleteArticle` function.
  const handleDelete = async () => {
    await deleteArticle(articleId, token, setLoading, navigate)
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
        <Edit_Article articleId={articleId} initialTitle={initialTitle} initialContent={initialContent} initialImage={initialImage}/>
          <DropdownMenuItem className={"menu_item"} onClick={handleDelete}>
            <Icon name={"delete"} size={16} />
            <span>Delete Article</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ArticleOptions;
