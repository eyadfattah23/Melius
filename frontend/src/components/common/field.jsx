import "../../assets/styles/common/field.css"
function Field({placeholder, type, mode, value, onChange, required
}){
    return <input type={type} placeholder={placeholder} className={mode} value={value} onChange={onChange} required={required}/>
}
export default Field