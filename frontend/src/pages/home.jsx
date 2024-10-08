import Footer from "../components/footer";
import Navbar from "../components/common/navbar";
import "../assets/styles/home.css";
import Counter2 from "../components/common/counter2";
import Button from "../components/common/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Leaders_List from "../components/leaders_list";
import RelapsingCheck from "../components/common/relapsing_check";
import createOrResetTimer from "../functions/create_or_reset_timer";
import fetchUser from "../functions/fetch_user";
import { FourSquare } from "react-loading-indicators";
/**
 * serves as the main landing page for authenticated users, providing a personalized welcome message, 
 * and options to join or reset a challenge, and view a leaderboard of top performers.
 */
function Home() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user_id = JSON.parse(localStorage.getItem("user_id"));

  if (!token || !user_id){
    // if token or user_id removed, it logs out the user
    handleLogout(navigate)
  }
  // Component state
  const [username, setUsername] = useState("");
  const [maxDays, setMaxDays] = useState(-1);
  const [isUserLoading, setIsUserLoading] = useState(true); // Tracks user data loading state
  const [isLeadersLoading, setIsLeadersLoading] = useState(false); // Tracks leader board data loading state
  const [elapsedDays, setDays] = useState(-1);
  const navigate = useNavigate();

  // Fetch user data on component mount and when relevant state variables change
  useEffect(() => {
    const fetchUserData = async () => {
      setIsUserLoading(true);
      try {
        await fetchUser(user_id, token, setUsername, setMaxDays, navigate,null, setDays);
      } finally {
        setIsUserLoading(false);
      }
    };
    
    fetchUserData();
    
  }, [user_id, token]);

  const handleJoinChallenge = () => {
    createOrResetTimer(user_id, token, setIsLeadersLoading, navigate);
  };

  return (
    <>
      <Navbar maxDays={maxDays}/>
      <main className="main_layout">
        {/* If user data is being fetched, display FourSquare spinner */}
        {isUserLoading ? (
          <section className="full_screen_section px-16 py-8" id="hero">
            <FourSquare color="#040093" size="medium" text="Loading..." textColor="#000" />
          </section>
        ) : (
          <section className="full_screen_section px-16 py-8" id="hero">
            <h2>Welcome, {username}</h2>
            {elapsedDays >= 0 ? (
              <div className="stats flex flex-col justify-center items-center gap-8 py-8">
                <h4>You're on</h4>
                <Counter2
                  achieved_days={elapsedDays}
                  unit={elapsedDays > 1 ? "Days" : "Day"}
                />
                <h4>of your journey to freedom</h4>
              </div>
            ) : (
              <div className="stats flex flex-col justify-center items-center gap-8 py-8">
                <h4>Ready for a Change?</h4>
                <p>
                  Join our challenge today and start your journey towards a better
                  you!
                </p>
                <div>
                  <Button
                    text={"Join the Challenge"}
                    type={"cta_filled"}
                    onClick={handleJoinChallenge}
                  />
                </div>
              </div>
            )}
          </section>
        )}
        {
          maxDays >= 0 && <RelapsingCheck user_id={user_id} token={token}/>
        }
        {/* Display loading spinner if leaders data is still being fetched */}
        {maxDays >= 0 && (isLeadersLoading ? (
          <section className="leaders-board flex flex-col gap-8 justify-center px-16">
            <FourSquare color="#32cd32" size="medium" text="Loading Leaders..." textColor="#000" />
          </section>
        ) : (
          <section className="leaders-board flex flex-col gap-8 justify-center px-16">
            <h1>Leaders Board</h1>
            <Leaders_List setMaxDays={setMaxDays} />
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Home;
