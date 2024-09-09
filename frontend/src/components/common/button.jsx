import "../../assets/styles/common/button.css"
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