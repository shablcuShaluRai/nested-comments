export const generateUid = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };
  
  export const isEmptyArr = (arr) => arr?.length > 0;
  
  export const createComment = (commentText, parentId = null) => ({
    parentId: parentId,
    id: generateUid(),
    body: commentText,
    timeStamp: Date.now(),
    children: []
  });
  
  export const addChildComment = (commentList, text, parentId) => {
    if (commentList?.length > 0) {
      for (let comment of commentList) {
        if (comment.id === parentId) {
          comment.children.push(createComment(text, parentId));
        } else {
          addChildComment(comment.children, text, parentId);
        }
      }
    }
    return commentList;
  };
  
  export const deleteComment = (data, idToRemove) => {
    const filtered = data.filter(entry => entry.id !== idToRemove);
    return filtered.map(entry => {
      if(!entry.children.length) return entry;
      return {...entry, children: deleteComment(entry.children, idToRemove)};
    });
  }
  
