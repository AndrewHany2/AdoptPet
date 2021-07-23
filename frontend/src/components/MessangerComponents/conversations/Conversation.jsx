import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find(m => m !== currentUser);

    const getUser = async () => {
      try {
        const res = await axios(`api/user/${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? user?.image
            : "/assets/person/noAvatar.png"
        }
        alt=""
      />
      <span className="conversationName">{`${user?.firstName} ${user?.lastName}`}</span>
    </div>
  );
}
