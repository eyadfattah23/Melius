function Achievement_Card({badge, days}){
    return <div className="achievement_card">
        { badge}
       <p> {days} Days</p>
    </div>
}
export default Achievement_Card