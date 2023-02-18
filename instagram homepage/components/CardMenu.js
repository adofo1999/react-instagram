import "../styles/cardMenu.scss";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";


function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon"/>
        <Comments className="icon"/>
        <Inbox className="icon"/>
      </div>
    </div>
  );
}




export default CardMenu;