import { TabsList, TabsTrigger } from "./shadcn/ui/tabs";

function Tab({
  pageNum,
  user_id,
  contentType,
  setTotalPages,
  setLoading,
  setContent,
  activeTabName, 
  setActiveTabName, 
}) {
  return (
    <div className="grid grid-cols-3">
      <button
        value={activeTabName}
        onClick={() => setActiveTabName("most_liked")}
        className={`${activeTabName === "most_liked" ? "tab_active" : "tab"}`}
      >
        <p>Most Liked</p>
      </button>

      <button
        value={activeTabName}
        onClick={() => setActiveTabName("newest")}
        className={`${activeTabName === "newest" ? "tab_active" : "tab"}`}
      >
        <p>Newest</p>
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
          className={`${activeTabName === "oldest" ? "tab_active" : ""}`}
        >
          <p>Oldest</p>
        </button>
      )}
    </div>
  );
}

export default Tab;
