import { useEffect } from "react"
import { Card, CardContent } from "../components/shadcn/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/shadcn/ui/carousel"
import Articles_Card from "./articles_card"

export default function Articles_Carousel() {
  useEffect(() => {
    // fetchContent("articles",pageNum, 3, null, setTotalPages, setLoading, setActiveTabName, "most_liked", setArticles, setArticleOfTheWeek);

  }, []);
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
            <Articles_Card/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
