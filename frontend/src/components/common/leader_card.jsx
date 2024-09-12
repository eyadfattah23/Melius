import "../../assets/styles/common/leader_card.css";

function Leader_card({ name, badge }) {
  return (
    <div>
      <div className="leader_card">
        {badge}
      </div>
      <h4>{name}</h4>
    </div>
  );
}

export default Leader_card;
