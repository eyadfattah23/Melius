function Feature({icon, title, description}){
    return <div className="feature_item flex flex-col justify-center items-center gap-4 ">
        <div className="content flex flex-col items-center gap-4 ">
            <div className="header flex items-center justify-center gap-2">
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