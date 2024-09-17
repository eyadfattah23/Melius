import axios from "axios";
import config from "../config";
import handleLogout from "./loggout";
/**
 * fetchContent - Function to fetch content such as posts or articles from the API.
 * 
 * This function retrieves content (either posts or articles) based on the specified content type,
 * page number, and filter options. It also handles token authorization and logging the user out if the token is invalid.
 */
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
  setArticleOfTheWeek,
  navigate
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
    // If fetching posts, update the posts content state
    if (contentType === "posts") {
      setContent(response.data.posts);
    }
    // If fetching articles, either set "Article of the Week" or update articles content
    if (contentType === "articles") {
      if (setArticleOfTheWeek)
      {
        setArticleOfTheWeek(response.data.articles[0])
      }
      else{
        setContent(response.data.articles);
      }
    }
    // Set the total number of pages for pagination
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
