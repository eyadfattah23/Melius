import { Link } from "react-router-dom";
import Button from "../components/common/button";
import "../assets/styles/not_found.css";

/**
 * This component renders a custom 404 error page. It informs the user that the
 * requested page was not found and provides a button to either redirect the 
 * user to the home page (if logged in) or to the landing page (if not logged in).
 */

function Error_404() {
  // Check if the user is logged in by retrieving the user_id from localStorage
  const loggedin = localStorage.getItem("user_id");
  return (
    <>
      <section className="not_found_main flex flex-col gap-8 items-center justify-center px-16">
        <span>404</span>
        <p>
          This page was not found. You may have mistyped the address or the page may have moved.
        </p>
        
        {/* Button redirecting based on login status */}
        <Link to={"/"}>
          <Button 
            text={loggedin ? "Take me to the home page" : "Take me to the landing page"} 
            type={"btn_404"} 
          />
        </Link>
      </section>
    </>
  );
}

export default Error_404;
