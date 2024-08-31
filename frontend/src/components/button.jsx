import "../assets/styles/button.css"
function Button({icon, text, type}) {
    return (
      <button className={`btn ${type}`}>
        {icon}
        <div>
            {text}
        </div>
      </button>
    )
  }
  
  export default Button