import axios from "axios";
import config from "../config";
import handleLogout from "./loggout";
const fetchContent = async (
  contentType,
  token,
  page,
  per_page,
  user_id,
  setTotalPages,
  setLoading,
  setActiveTabName,
  filter,
  setContent,
  setArticleOfTheWeek
) => {
  setLoading(true);
  setActiveTabName(filter);
  try {
    const response = await axios.get(config.API_URL + contentType, {
      params: {
        page,
        per_page,
        filter_type: filter,
        ...(contentType === "posts" ? { user_id } : {}),
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
   
    if (contentType === "posts") {
      setContent(response.data.posts);
    }
    if (contentType === "articles") {
      if (setArticleOfTheWeek)
      {
        setArticleOfTheWeek(response.data.articles[0])
      }
      else{
        setContent(response.data.articles);
      }
    }
    setTotalPages(Math.ceil(response.data.total_pages));

    console.log(response);
  } catch (error) {
    if (error.status === 401 || error.status === 422){
      handleLogout(navigate)
    }
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export default fetchContent;
