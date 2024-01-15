import React from "react";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg flex-[2] p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h1 className="widgetLgTitle text-[22px] font-semibold">
        Latest Transactions
      </h1>
      <table className="widgetLgTable w-full border-spacing-5">
        <tr className="widgetLgTr">
          <th className="widgetLgTh text-left">Customer</th>
          <th className="widgetLgTh text-left">Date</th>
          <th className="widgetLgTh text-left">Amount</th>
          <th className="widgetLgTh text-left">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser flex items-center font-semibold">
            <img
              src="https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"
              alt=""
              className="widgetLgImg w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate font-light">2 Jun 2022</td>
          <td className="widgetLgDAmount font-light">€145.20</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser flex items-center font-semibold">
            <img
              src="https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"
              alt=""
              className="widgetLgImg w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate font-light">2 Jun 2022</td>
          <td className="widgetLgDAmount font-light">€145.20</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser flex items-center font-semibold">
            <img
              src="https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"
              alt=""
              className="widgetLgImg w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate font-light">2 Jun 2022</td>
          <td className="widgetLgDAmount font-light">€145.20</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser flex items-center font-semibold">
            <img
              src="https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"
              alt=""
              className="widgetLgImg w-10 h-10 rounded-full object-cover mr-3"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate font-light">2 Jun 2022</td>
          <td className="widgetLgDAmount font-light">€145.20</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
