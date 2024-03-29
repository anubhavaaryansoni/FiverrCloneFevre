import React from "react";
import "./orders.scss";
import { Link } from "react-router-dom";

const Orders = () => {
    const currentUser = {
        id: 1,
        username: "Joe mama",
        isSeller: true,
      };
    
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
         
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller? "Buyer" : "Seller" }</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://th.bing.com/th/id/OIP.Zqfilq8cgKRErOPNfD1WdQHaEV?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>13</td>
            <td>
              <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://th.bing.com/th/id/OIP.Zqfilq8cgKRErOPNfD1WdQHaEV?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
              120.<sup>99</sup>
            </td>
            <td>41</td>
            <td>
              <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://th.bing.com/th/id/OIP.Zqfilq8cgKRErOPNfD1WdQHaEV?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>
              79.<sup>99</sup>
            </td>
            <td>55</td>
            <td>
              <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://th.bing.com/th/id/OIP.Zqfilq8cgKRErOPNfD1WdQHaEV?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>
              119.<sup>99</sup>
            </td>
            <td>29</td>
            <td>
              <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://th.bing.com/th/id/OIP.Zqfilq8cgKRErOPNfD1WdQHaEV?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>34</td>
            <td>
              <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://th.bing.com/th/id/OIP.Zqfilq8cgKRErOPNfD1WdQHaEV?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>
              110.<sup>99</sup>
            </td>
            <td>16</td>
            <td>
              <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Orders;
