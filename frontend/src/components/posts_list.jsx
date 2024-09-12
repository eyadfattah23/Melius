import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "../components/shadcn/ui/tabs";
  import Button from "./common/button";
  import Post from "./common/post";
  import { useState, useEffect } from "react";
  import { Dialog, DialogTrigger } from "./shadcn/ui/dialog";
  import CreatePost from "./common/create_post";
  import PageNums from "./common/pagination";
  import Tab from "./tab";
  import fetchContent from "../functions/fetch_content";
  
  function Posts_list() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [activeTabName, setActiveTabName] = useState("most_liked"); 
    const [pageNum, setPageNum] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const token = JSON.parse(localStorage.getItem("token"));
  
    useEffect(() => {
      fetchContent(
        "posts",
        token,
        pageNum,
        3,
        user_id,
        setTotalPages,
        setLoading,
        setActiveTabName,
        activeTabName,
        setPosts
      );
      
    }, [activeTabName, pageNum]);
  
    return (
      <>
        {posts  ? (
          <div defaultValue="most_liked" id="posts_section">
            <div className="header">
              <Tab
                pageNum={pageNum}
                user_id={user_id}
                setActiveTabName={setActiveTabName}
                setLoading={setLoading}
                setTotalPages={setTotalPages}
                setContent={setPosts}
                contentType={"posts"}
                activeTabName={activeTabName}
              />
                          <div className="create_post_btn">
                              <Dialog>
                                  <DialogTrigger className="btn cta_filled">
                                    <span> Create a post </span>
                                  </DialogTrigger>
                                  <CreatePost />
                              </Dialog>
                          </div>
                      </div>
                      <div value="most_liked" className="content">
                          {
                              posts.map((post) => (
                                  <Post title={post.title} text={post.text} created_at={post.created_at} key={post.id} post_id={post.id} comments_count={post.comments_count} likes_count={post.likes_count} isLiked={post.liked} activeTabName={activeTabName} postUsername = {post.username} userMaxTime ={post.max_time}/>
                              ))
                          }
                          <PageNums totalPages={totalPages} pageNum={pageNum} setPageNum={setPageNum}/>
                      </div>
                  </div>
              ) : (
                  <div className="no_posts container">
                      <h2>We're sorry, but there are currently no posts to display.</h2>
                      <div className="description">
                          <p>Start your journey by creating your first post.</p>
                      </div>
                      <div className="action_btn">
                      <Dialog>
                                  <DialogTrigger className="btn cta_filled">
                                    <span> Create a post </span>
                                  </DialogTrigger>
                                  <CreatePost />
                              </Dialog>
                      </div>
                  </div>
              )
          }
      </>
  );
}

export default Posts_list;
