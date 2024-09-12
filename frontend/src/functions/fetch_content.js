import axios from "axios";

const fetchContent = async (contentType, token, page, per_page, user_id, setTotalPages, setLoading, setActiveTabName, filter, setContent, setArticleOfTheWeek) => {
    setLoading(true);
    setActiveTabName(filter);
    try {
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/${contentType}`, {
            params: {
              page,
              per_page,
              filter_type: filter,
              ...(contentType === "posts" ? { user_id } : {})
            },
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          });
          if (contentType === "posts")
          {
            setContent(response.data.posts)
          }
          if (contentType === "articles")
          {
            if (setArticleOfTheWeek){
              setArticleOfTheWeek(response.data.articles[0])
              console.log(response.data.articles[0])
            }
            else{
              setContent(response.data.articles)

            }
          }

        
          // console.log(response.data.articles)
      //       if (setArticleOfTheWeek)
      //       {
      //           const today = new Date();
      // const dayOfWeek = today.getDay();
      // const daysSinceSaturday = (dayOfWeek + 1) % 7; // Calculate days since last Saturday
      // const lastSaturday = new Date(today);
      // lastSaturday.setDate(today.getDate() - daysSinceSaturday);
      // lastSaturday.setHours(0, 0, 0, 0);
      // // setArticleOfTheWeek(fetchedArticles
      // //   .filter(article => new Date(article.created_at) >= lastSaturday)
      // //   .sort((a, b) => {
      // //     const likesDifference = b.likes_count - a.likes_count;
      // //     if (likesDifference !== 0) {
      // //       return likesDifference;
      // //     }
      // //     return new Date(b.created_at) - new Date(a.created_at);
      // //   })[0]
      // // );
      //       }

      
            
        
        setTotalPages(Math.ceil(response.data.total_pages));

        console.log(response)
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
export default fetchContent
