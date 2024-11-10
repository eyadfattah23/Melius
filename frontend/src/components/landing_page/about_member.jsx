import Icon from "../../assets/icons/icon";

function AboutMember({ name, role, about, linkedin, gmail, github, picture }) {
  return (
    <div
      className={`team_member flex flex-col items-center`}
    >
      <div className="img" style={{ backgroundImage: `url(${picture})` }}>  
      </div>
      <div className="information flex flex-col items-center gap-2">
          <h3 className="name font-bold">{name}</h3>
          <p className="role text-gray-700">{role}</p>
          <p>{about}</p>      
      </div>
      <div className="social_media flex  justify-evenly">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={24} />
            </a>
            <a href={gmail} target="_blank" rel="noopener noreferrer">
              <Icon name="email" size={24}  />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={24}  />
            </a>
          </div>
        
      
    </div>
  );
}

export default AboutMember;
