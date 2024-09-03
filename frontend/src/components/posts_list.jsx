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
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationPrevious, 
  PaginationLink, 
  PaginationNext 
} from "./shadcn/ui/pagination";
import { Dialog, DialogTrigger } from "./shadcn/ui/dialog";
import CreatePost from "../pages/create_post";

function Posts_list({}) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [activeTabName, setActiveTabName] = useState("Most Liked");
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (filter) => {
      setLoading(true);
      setActiveTabName(filter);
      try {
          const response = await axios.get('http://127.0.0.1:5050/api/v1/posts', {
              params: {
                  page: pageNum,
                  per_page: 8,
                  user_id: user_id,
              },
          });

          const fetchedPosts = response.data.posts;
          setTotalPages(Math.ceil(response.data.total_pages));

          if (filter === "My Posts") {
              const filtered_posts = fetchedPosts.filter(post => post.user_id === user_id);
              setPosts(filtered_posts);
          } else if (filter === "Newest") {
              const sorted_posts = fetchedPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
              setPosts(sorted_posts);
          } else {
            const sorted_posts = fetchedPosts.sort((a, b) => b.likes_count - a.likes_count);
              setPosts(fetchedPosts);
          }
      } catch (error) {
          console.error(error);
      } finally {
          setLoading(false);
      }
  };

  const renderPagination = (totalPages, setPageNum, currentPage) => {
      const paginationItems = [];

      for (let i = 0; i < totalPages; i++) {
          paginationItems.push(
              <PaginationItem key={i} active={i + 1 === currentPage}>
                  <PaginationLink
                      href="#"
                      onClick={() => setPageNum(i + 1)}
                  >
                      {i + 1}
                  </PaginationLink>
              </PaginationItem>
          );
      }

      return paginationItems; // Return the array of pagination items
  };

  const handlePrevious = () => {
      if (pageNum > 1) {
          setPageNum(pageNum - 1);
      }
  };

  const handleNext = () => {
      if (pageNum < totalPages) {
          setPageNum(pageNum + 1);
      }
  };

  useEffect(() => {
      fetchPosts(activeTabName);
  }, [activeTabName, pageNum]);

  return (
      <>
          {
              posts && posts.length > 0 ? (
                  <Tabs defaultValue="Most Liked" className="container">
                      <div className="header">
                          <TabsList className="grid  grid-cols-3 tab">
                              <TabsTrigger value="Most Liked" onClick={() => fetchPosts("Most Liked")}><p>Most Liked</p></TabsTrigger>
                              <TabsTrigger value="Newest" onClick={() => fetchPosts("Newest")}><p>Newest</p></TabsTrigger>
                              <TabsTrigger value="My Posts" onClick={() => fetchPosts("My Posts")}><p>My Posts</p></TabsTrigger>
                          </TabsList>
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
                                  <Post title={post.title} text={post.text} created_at={post.created_at} key={post.id} post_id={post.id} comments_count={post.comments_count} likes_count={post.likes_count} isLiked={post.liked}/>
                              ))
                          }
                          <Pagination>
                              <PaginationContent>
                                  <PaginationItem>
                                      <PaginationPrevious href="#" onClick={handlePrevious} />
                                  </PaginationItem>
                                  {renderPagination(totalPages, setPageNum, pageNum)}
                                  <PaginationNext href="#" onClick={handleNext} />
                              </PaginationContent>
                          </Pagination>
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
