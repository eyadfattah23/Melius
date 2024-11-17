import Articles_Card from "../common/articles_card"
export default function Hero({isAdmin, articleOfTheWeek}) {
    return  <section className="items-center justify-center flex w-full lg:pt-[150px] pt-[100px] lg:pb-[80px] pb-[20px] lg:px-20 px-6">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-16">
   
     {isAdmin && (
 <div className="create-article-container">
   <Create_Article />
 </div>
)}
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