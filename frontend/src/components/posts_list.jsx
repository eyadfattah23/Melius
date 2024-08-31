import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "../components/shadcn/ui/tabs"
import Button from "./button"
import Post from "./post"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious,PaginationLink, PaginationNext, PaginationEllipsis } from "./shadcn/ui/pagination"
function Posts_list({}){
    return   <Tabs defaultValue="Most Liked" className="container">
          <div className="header">
            <TabsList className="grid  grid-cols-3 tab">
      <TabsTrigger value="Most Liked "><p>Most Liked</p></TabsTrigger>
      <TabsTrigger value="Newest "><p>Newest</p></TabsTrigger>
      <TabsTrigger value="My Posts "><p>My Posts</p></TabsTrigger>
    </TabsList>
    <div className="create_post_btn">
      <Button text={"Create a post"} type={"primary"}/>
    </div>
            </div>
    
    <TabsContent value="Most Liked" className="content">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
        <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
        
    </TabsContent>
    <TabsContent value="Newest">
     
    </TabsContent>
    <TabsContent value="My Posts">
     
    </TabsContent>
  </Tabs>
}
export default Posts_list



