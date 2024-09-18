import "../../assets/styles/common/button.css"
/**
 * Button component renders a styled button with optional icon and text.
 */
function Button({icon, text, type, onClick}) {
    return (
      <button className={`btn ${type}`} onClick={onClick}>
        {icon}
        <div>
            {text}
        </div>
      </button>
    )
  }
  
  export default Button