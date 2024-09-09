import { TabsList, TabsTrigger, TabsContent } from "./shadcn/ui/tabs"
import fetchContent from "../functions/fetch_content"
function Tab({pageNum, user_id, contentType, setTotalPages, setLoading, setActiveTabName, setContent }){

    return  <TabsList className="grid  grid-cols-3 tab">
    <TabsTrigger value="most_liked" onClick={() => fetchContent(contentType,pageNum, 3, user_id, setTotalPages, setLoading, setActiveTabName, "most_liked", setContent)}><p>Most Liked</p></TabsTrigger>
    <TabsTrigger value="newest" onClick={() => fetchContent(contentType,pageNum, 3, user_id, setTotalPages, setLoading, setActiveTabName, "newest", setContent)}><p>Newest</p></TabsTrigger>
    {
        contentType === "posts" && <TabsTrigger value="my_posts" onClick={() => fetchContent(contentType,pageNum, 3, user_id, setTotalPages, setLoading, setActiveTabName, "my_posts", setContent)}><p>My Posts</p></TabsTrigger>
    }
    {
        contentType === "articles" && <TabsTrigger value="oldest" onClick={() => fetchContent(contentType,pageNum, 3, user_id, setTotalPages, setLoading, setActiveTabName, "oldest", setContent)}><p>Oldest</p></TabsTrigger>
    }
</TabsList>
}
export default Tab
