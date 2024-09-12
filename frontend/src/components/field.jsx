import "../assets/styles/field.css";

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
