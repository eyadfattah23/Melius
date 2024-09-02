import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "../components/shadcn/ui/tabs"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious,PaginationLink, PaginationNext, PaginationEllipsis } from "./shadcn/ui/pagination"
import Articles_Card from "./articles_card"
import axios from "axios"
import { useEffect, useState } from "react"
import Button from "./button"
import { Link } from "react-router-dom"
function Articles_list({}){
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([])
 useEffect(()=>{
  const fetchArticles = async () => {
    setLoading(true);
    try {
        const response = await axios.get(`http://127.0.0.1:5050/api/v1/articles`);
        console.log(response.data);
        setArticles(response.data)
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
    
};
fetchArticles()
 }, [articles])
    return (
      <>
      {
  articles && articles.length > 0 ? (
    <Tabs defaultValue="Most Liked" className="container">
      <div className="header">
        <h1>Articles</h1>
        <TabsList className="grid w-full grid-cols-3 tab">
          <TabsTrigger value="Most Liked"><p>Most Liked</p></TabsTrigger>
          <TabsTrigger value="Newest"><p>Newest</p></TabsTrigger>
          <TabsTrigger value="Oldest"><p>Oldest</p></TabsTrigger>
        </TabsList>
      </div>
    
      <TabsContent value="Most Liked" className="content">
      <div className="articles_list grid grid-cols-2">
  {
    articles.map((article, index) => (
      <Articles_Card key={index} orientation={"vertical"}  id={article.id}  title={article.title} published_date={article.created_at}/>
    ))
  }
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
    </Tabs>
  ) : (
    <div className="no_articles container">
      <h4>We're sorry, but there are currently no articles to display.</h4>
      <div className="description">
      <p>Please check back later or explore other sections of our website for more content.</p>
      <p>If you have any specific topics you're interested in, feel free to contact us. We would love to hear your suggestions!</p>
      </div>
      <Link to="/contact">
        <Button text="Contact us" type="primary" />
      </Link>
    </div>
  )
}
      </>
    )
}
export default Articles_list



