import Icon from "../../assets/icons/icon"
import "../../assets/styles/common/button.css"
/**
 * Button component renders a styled button with optional icon and text.
 */
function Button({icon, text, type, onClick}) {
  if (type === "cta_hero") {
    return <button className="cta_hero button p-6  gap-2">
    <Icon name={"arrow_right"} size={32}/>
   <div className="label">
   {text}
   </div>
  </button>
  }
  else {
    return (
      <button className={`btn button ${type}`} onClick={onClick}>
        {icon}
        <div>
            {text}
        </div>
      </button>
    
    )
  }
  }
  
  export default Button