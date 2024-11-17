
/**
 * Tab - A component for rendering tab buttons to filter content based on selected criteria.
 * 
 * This component provides tab buttons that allow users to switch between different views
 * based on the content type (e.g., latest, most liked, my posts, oldest). It highlights the
 * active tab and manages tab selection through the `setActiveTabName` function.
 */
function Tab({
  contentType,
  activeTabName, 
  setActiveTabName, 
}) {
  return (
    <div className="grid grid-cols-3  p-1 rounded-[6px] bg-white bg-opacity-87 gap-1">
        <button
        value={activeTabName}
        onClick={() => setActiveTabName("newest")}
        className={`rounded-[8px] p-3 ${activeTabName === "newest" ? "bg-[#94B1F9]  text-white text-opacity-87" : " hover:bg-[#94B1F9]  hover:bg-opacity-50 text-[#1655F2]"}`}
      >
        <p>Latest</p>
      </button>
      <button
        value={activeTabName}
        onClick={() => setActiveTabName("most_liked")}
        className={`rounded-[8px] p-3 ${activeTabName === "most_liked " ? "bg-[#94B1F9]  text-white text-opacity-87" : " hover:bg-[#94B1F9]  hover:bg-opacity-50 text-[#1655F2]"}`}
      >
        <p>Most Liked</p>
      </button>

    

      {contentType === "posts" && (
        <button
        value={activeTabName}
          onClick={() => setActiveTabName("by_user")}
          className={`rounded-[8px] p-3 ${activeTabName === "by_user" ? "bg-[#94B1F9]  text-white text-opacity-87" : " hover:bg-[#94B1F9]  hover:bg-opacity-50 text-[#1655F2]"}`}
        >
          <p>My Posts</p>
        </button>
      )}

      {contentType === "articles" && (
        <button
          value="oldest"
          onClick={() => setActiveTabName("oldest")}
          className={`rounded-[8px] p-3 ${activeTabName === "oldest" ? "bg-[#94B1F9]  text-white text-opacity-87" : " hover:bg-[#94B1F9]  hover:bg-opacity-50 text-[#1655F2]"}`}
        >
          <p>Oldest</p>
        </button>
      )}
    </div>
  );
}

export default Tab;
