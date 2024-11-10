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
import Hero from "../components/home/hero";
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
      <main>
        <Hero isUserLoading={isLeadersLoading} elapsedDays={elapsedDays} handleJoinChallenge={handleJoinChallenge} user_id={user_id} token={token}/>
       
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
