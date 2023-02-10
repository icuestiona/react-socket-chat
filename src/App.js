import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const projectID = "fbf80604-fc3d-4fa1-adde-5b0378a4101a";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
      <footer>
        <small>
          This project was Coded by{" "}
          <a
            href="https://www.linkedin.com/in/sorayacarvajal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soraya Carvajal
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/icuestiona/react-socket-chat"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </small>
      </footer>
    </div>
  );
};

export default App;
