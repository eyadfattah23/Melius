
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
    <div className="grid grid-cols-3 p-2 gap-2">
        <button
        value={activeTabName}
        onClick={() => setActiveTabName("newest")}
        className={`${activeTabName === "newest" ? "tab_active" : "tab"}`}
      >
        <p>Latest</p>
      </button>
      <button
        value={activeTabName}
        onClick={() => setActiveTabName("most_liked")}
        className={`${activeTabName === "most_liked" ? "tab_active p-2" : "tab p-2"}`}
      >
        <p>Most Liked</p>
      </button>

    

      {contentType === "posts" && (
        <button
        value={activeTabName}
          onClick={() => setActiveTabName("by_user")}
          className={`${activeTabName === "by_user" ? "tab_active" : "tab"}`}
        >
          <p>My Posts</p>
        </button>
      )}

      {contentType === "articles" && (
        <button
          value="oldest"
          onClick={() => setActiveTabName("oldest")}
          className={`${activeTabName === "oldest" ? "tab_active" : "tab"}`}
        >
          <p>Oldest</p>
        </button>
      )}
    </div>
  );
}

export default Tab;
