function Feature({icon, title, description}){
    return <div className="feature_item">
        <div className="content">
            <div className="header">
                {icon}
                <h4>
                    {title}
                </h4>
            </div>
            <p>
                {description}
            </p>
        </div>
    </div>
}
export default Feature