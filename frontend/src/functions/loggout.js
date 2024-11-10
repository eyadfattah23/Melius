/**
 * handleLogout - Clears user authentication data and redirects to the login page.
 *
 * This function performs the logout operation by removing all relevant user data from
 * local storage and then redirects the user to the login page.
 */
const handleLogout = (navigate) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("level");
    navigate("/login");
  };
export default handleLogout