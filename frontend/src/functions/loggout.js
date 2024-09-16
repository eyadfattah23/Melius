const handleLogout = (navigate) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("level");
    navigate("/login");
  };
export default handleLogout