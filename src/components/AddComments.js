import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../actions/actions";
import { generateUid } from "../utils";
import Form from "./Form";

const AddComments = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddComments = () => {
    if (text) {
      dispatch(
        addComments({
          id: generateUid(),
          parentId: null,
          body: text,
        })
      );
      setText("");
    }
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1>Comment Widget</h1>
      <Form
        text={text}
        handleText={handleText}
        btnName="Add Comment"
        handelClick={handleAddComments}
        variant="btn add-comment-btn"
      />
    </>
  );
};

export default AddComments;
