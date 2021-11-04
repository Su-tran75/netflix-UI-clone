import React from "react";
import "./widgetLg.scss";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://images.pexels.com/photos/2587316/pexels-photo-2587316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="profile picture"
            />
            <span className="widgetLgName">Leo Messi</span>
          </td>
          <td className="widgetLgDate">13 Oct 2021</td>
          <td className="widgetLgAmount">$199.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://images.pexels.com/photos/2587316/pexels-photo-2587316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="profile picture"
            />
            <span className="widgetLgName">Leo Messi</span>
          </td>
          <td className="widgetLgDate">13 Oct 2021</td>
          <td className="widgetLgAmount">$199.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://images.pexels.com/photos/2587316/pexels-photo-2587316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="profile picture"
            />
            <span className="widgetLgName">Leo Messi</span>
          </td>
          <td className="widgetLgDate">13 Oct 2021</td>
          <td className="widgetLgAmount">$199.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              className="widgetLgImg"
              src="https://images.pexels.com/photos/2587316/pexels-photo-2587316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="profile picture"
            />
            <span className="widgetLgName">Leo Messi</span>
          </td>
          <td className="widgetLgDate">13 Oct 2021</td>
          <td className="widgetLgAmount">$199.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
