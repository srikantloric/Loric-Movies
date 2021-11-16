import "./Suggestion.scss";
import React from "react";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
function Suggestion() {
  return (
    <div className="suggestion_container">
      <span>
        For any movie suggestion please click on the suggestion button.
      </span>
      <button>
        Suggest Here <MarkChatUnreadIcon className="suggest_icon" />
      </button>
    </div>
  );
}

export default Suggestion;
