import { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./Form"
import RenderIf from "./RenderIf";
import { replyToComment } from "../actions/actions";


const Reply = ({ comment, setReply, isReply }) => {
  const dispatch = useDispatch();
  const [replyText, setReplyText] = useState("");
  const handleText = (e) => {
    setReplyText(e.target.value);
  };
  const handleClick = () => {
    if(replyText) {
      dispatch(
        replyToComment({
          commentId: comment.id,
          replyBody: replyText
        })
      );
      setReplyText("");
      setReply(false);
    }
  };
  return (
    <div>
      <RenderIf isTrue={isReply}>
        <>
        <Form
        text={replyText}
        handleText={handleText}
        btnName="Reply"
        handelClick={handleClick}
        variant="btn reply-btn"
      />
        </>
      </RenderIf>
    </div>
  );
};

export default Reply;
