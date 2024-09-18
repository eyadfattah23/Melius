import "../../assets/styles/common/leader_card.css";

/**
 * Leader_card Component
 * 
 * This component displays a leader card with a name and a badge.
 * It is designed to showcase a user's badge or avatar and their name, typically used in profiles or leaderboards.
 */
function Leader_card({ name, badge }) {
  return (
    <div className="leader_main">
      <div className="leader_card">
        {badge}
      </div>
      <h4>{name}</h4>
    </div>
  );
}

export default Leader_card;
