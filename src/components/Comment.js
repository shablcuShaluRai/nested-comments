import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCommentAction } from "../actions/actions";
import RenderIf from "./RenderIf";
import Reply from "./Reply";
import "../index.css";

const Comment = ({ comment, padding = 0 }) => {
  const [isReply, setReply] = useState(false);
  const dispatch = useDispatch();

  return (
    <div key={comment.id} style={{ paddingLeft: padding + 10 }}>
      <div>
        <span className="body-text">{comment.body}</span>
        <button className="btn reply-btn" onClick={() => setReply(true)}>
          Reply
        </button>
        <button
          className="btn delete-btn"
          onClick={() => dispatch(deleteCommentAction(comment.id))}
        >
          Delete
        </button>
      </div>
      <RenderIf isTrue={isReply}>
        <Reply comment={comment} setReply={setReply} isReply={isReply} />
      </RenderIf>
      <RenderIf isTrue={comment?.children?.length > 0}>
        {comment?.children.map((childComment, index) => (
          <Comment comment={childComment} />
        ))}
      </RenderIf>
    </div>
  );
};

export default Comment;
