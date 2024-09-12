import Icon from "../../assets/icons/icon";

function AboutMember({ name, role, about, linkedin, gmail, github, picture, reverse }) {
  return (
    <div
      className={`team_member flex flex-col items-center gap-8 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div
        className="member_card bg-cover bg-center w-full h-80 md:h-auto lg:w-1/2"
        style={{ backgroundImage: `url(${picture})` }}
      >
        <div className="information bg-yellow-300 p-4 w-3/4">
          <span className="name font-bold">{name}</span>
          <span className="role text-gray-700">{role}</span>
        </div>
      </div>
      <div className="description flex flex-col gap-4 w-full lg:w-1/2">
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
