import { ADD_COMMENT, REPLY_TO_COMMENT , DELETE_COMMENT} from "../actions/actionTypes";
import { createComment, addChildComment, deleteComment } from "../utils";

function commentsReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      const { body } = action?.payload;
      return [...state, createComment(body)];
    case REPLY_TO_COMMENT:
      const { commentId, replyBody } = action.payload;
      return [...addChildComment(state, replyBody, commentId)];

    case DELETE_COMMENT:
     return [...deleteComment(state, action.payload)]
    default:
      return state;
  }
}

export default commentsReducer;
