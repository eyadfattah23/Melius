function Leader_card({name, badge}){
    return <div className="leader_card">
        <div className="card">
        {
            badge
        }
        </div>
        <h4>{name}</h4>
    </div>
}
export default Leader_card