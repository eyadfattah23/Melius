import Icon from "../../assets/icons/icon";

function AboutMember({ name, role, about, linkedin, gmail, github, picture, reverse }) {
  return (
    <div className={`team_member flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="member_card bg-cover bg-center w-full md:w-1/2" style={{ backgroundImage: `url(${picture})` }}>
        <div className="information w-3/4">
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </div>
      </div>
      <div className="description flex flex-col gap-4 w-full md:w-1/2">
        <p>{about}</p>
        <div className="social_media flex flex-col gap-4">
          <p>Follow me for more updates</p>
          <div className="social_links flex gap-8">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={24} color="icon_secondary" />
            </a>
            <a href={gmail} target="_blank" rel="noopener noreferrer">
              <Icon name="email" size={24} color="icon_secondary" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={24} color="icon_secondary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMember;
