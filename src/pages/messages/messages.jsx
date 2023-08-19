import React from "react";
import "./messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Joe mama",
    isSeller: true,
  };
  const message = "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast. An interactive exchange of messages forms a conversation";
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>

            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td><Link to ="/message/123" style={{ textDecoration: 'none' }}>{message.substring(0,100)}....</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>Malcom Merlyn</td>
            <td><Link to ="/message/123" style={{ textDecoration: 'none' }}>{message.substring(0,100)}....</Link></td>
            <td>2 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>Oliver Queen</td>
            <td><Link to ="/message/123" style={{ textDecoration: 'none' }}>{message.substring(0,100)}....</Link></td>
            <td>1 day ago</td>
            
          </tr>
          <tr>
            <td>Thea Green</td>
            <td><Link to ="/message/123" style={{ textDecoration: 'none' }}>{message.substring(0,100)}....</Link></td>
            <td>1 day ago</td>
            
          </tr>
          <tr className="active">
            <td>Felicity</td>
            <td><Link to ="/message/123" style={{ textDecoration: 'none' }}>{message.substring(0,100)}....</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Messages;
