import "../assets/styles/field.css"
function Field({placeholder, type, mode
}){
    return <input type={type} placeholder={placeholder} className={mode}/>
}
export default Field