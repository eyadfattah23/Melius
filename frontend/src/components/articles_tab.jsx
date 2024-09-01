import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "../components/shadcn/ui/tabs"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious,PaginationLink, PaginationNext, PaginationEllipsis } from "./shadcn/ui/pagination"
import Articles_Card from "./articles_card"
function Articles_list({}){
    return   <Tabs defaultValue="Most Liked" className="container">
          <div className="header">
            <h1>Articles</h1>
            <TabsList className="grid w-full grid-cols-3 tab">
      <TabsTrigger value="Most Liked "><p>Most Liked</p></TabsTrigger>
      <TabsTrigger value="Newest "><p>Newest</p></TabsTrigger>
      <TabsTrigger value="Oldest "><p>Oldest</p></TabsTrigger>
    </TabsList>
            </div>
    
    <TabsContent value="Most Liked" className="content">
        <div className="articles_list grid grid-cols-2 ">
        <Articles_Card orientation={"vertical"}/>
        <Articles_Card orientation={"vertical"}/>
        <Articles_Card orientation={"vertical"}/>
        </div>
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
    <TabsContent value="Oldest">
     
    </TabsContent>
  </Tabs>
}
export default Articles_list



