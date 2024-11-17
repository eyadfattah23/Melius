import Articles_Card from "../common/articles_card"
import Create_Article from "../common/create_article"
export default function Hero({isAdmin, articleOfTheWeek}) {
    return  <section className="items-center justify-center flex-col gap-2 flex w-full lg:pt-[150px] pt-[100px] relative lg:pb-[80px] pb-[20px] lg:px-20 px-6">
      {isAdmin && (
<div className="w-full  flex justify-end"><Create_Article /></div>

)}
    <div className="flex flex-col justify-between items-center gap-16 ">
    </div>
     <Articles_Card
       orientation={"horizontal"}
       id={articleOfTheWeek.id}
       title={articleOfTheWeek.title}
       published_date={articleOfTheWeek.created_at}
       likes={articleOfTheWeek.likes_count}
       liked={articleOfTheWeek.liked}
       img = {articleOfTheWeek.img}
       author = {articleOfTheWeek.author}
     />
   </section>
}