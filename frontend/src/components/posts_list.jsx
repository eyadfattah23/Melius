import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/shadcn/ui/tabs";
import Button from "./button";
import Post from "./post";
import axios from "axios";
import { useState, useEffect } from "react";
import { Dialog, DialogTrigger } from "./shadcn/ui/dialog";
import CreatePost from "../pages/create_post";
import PageNums from "./pagination";
import Tab from "./tab";
import fetchContent from "../functions/fetch_content";
function Posts_list({}) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [activeTabName, setActiveTabName] = useState("Most Liked");
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  


  useEffect(() => {
      fetchContent("posts",pageNum, 3, user_id, setTotalPages, setLoading, setActiveTabName, activeTabName, setPosts);
  }, [activeTabName, pageNum]);

  return (
      <>
          {
              posts && posts.length > 0 ? (
                  <Tabs defaultValue="Most Liked" className="container">
                      <div className="header">
                         <Tab pageNum={pageNum} user_id={user_id} setActiveTabName={setActiveTabName} setLoading={setLoading} setTotalPages={setTotalPages} setContent={setPosts} contentType={"posts"}/>
                          <div className="create_post_btn">
                              <Dialog>
                                  <DialogTrigger>
                                      <Button text="Create a post" type="primary" />
                                  </DialogTrigger>
                                  <CreatePost />
                              </Dialog>
                          </div>
                      </div>
                      <TabsContent value={activeTabName} className="content">
                          {
                              posts.map((post) => (
                                  <Post title={post.title} text={post.text} created_at={post.created_at} key={post.id} post_id={post.id} comments_count={post.comments_count} likes_count={post.likes_count} isLiked={post.liked} activeTabName={activeTabName} postUser = {post.user_id}/>
                              ))
                          }
                          <PageNums totalPages={totalPages} pageNum={pageNum} setPageNum={setPageNum}/>
                      </TabsContent>
                  </Tabs>
              ) : (
                  <div className="no_posts container">
                      <h2>We're sorry, but there are currently no posts to display.</h2>
                      <div className="description">
                          <p>Start your journey by creating your first post.</p>
                      </div>
                      <div className="action_btn">
                          <Dialog>
                              <DialogTrigger>
                                  <Button text="Create a post" type="primary" />
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
