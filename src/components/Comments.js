import { useSelector } from "react-redux";
import Comment from "./Comment";

const Comments = () => {
  const comments = useSelector((state) => state.commentsReducer);
  return (
    <>
      {comments.map((cmt) => (
        <Comment comment={cmt} />
      ))}
    </>
  );
};

export default Comments;
