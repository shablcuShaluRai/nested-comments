import { ADD_COMMENT, REPLY_TO_COMMENT, DELETE_COMMENT } from "./actionTypes";

// Create dynamic action creator
const createActionCreator = (type) => (payload) => ({ type, payload });


export const addComments = createActionCreator(ADD_COMMENT);
export const replyToComment = createActionCreator(REPLY_TO_COMMENT);
export const deleteCommentAction = createActionCreator(DELETE_COMMENT);