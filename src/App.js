import { useSelector } from "react-redux";
import Comments from "./components/Comments";
import RenderIf from "./components/RenderIf";
import AddComments from "./components/AddComments";
import { isEmptyArr } from "./utils";
import "./index.css"

export default function App() {
  const comments = useSelector((state) => state.commentsReducer);
  return (
    <div className="container">
      <AddComments />
      <RenderIf isTrue={isEmptyArr(comments)}>
        <Comments />
      </RenderIf>
    </div>
  );
}