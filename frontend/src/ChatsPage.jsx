require("dotenv").config();
import { PrettyChatWindow } from "react-chat-engine-pretty";

let projectid = process.env.PROJECTID;

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="735ad1de-f559-4920-afd2-137614e247d0"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
