import "../../assets/styles/common/field.css";

/**
 * Field Component
 * 
 * This reusable component renders an input field that can be customized with various properties such as 
 * placeholder, type, mode (class for styling), value, onChange handler, required flag, and an optional color.
 */
function Field({ placeholder, type, mode, value, onChange, required, color }) {
  const inputStyle = {
    color: color || "inherit", // Use the provided color, or fallback to default
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={mode}
      value={value}
      onChange={onChange}
      required={required}
      style={inputStyle} // Apply the optional color
    />
  );
}
export default Field;