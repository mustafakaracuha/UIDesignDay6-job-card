import React from "react";
import paintbrush from "../assets/icons/paintbrush.png";
import coding from "../assets/icons/coding.png";
import setting from "../assets/icons/setting.png";
import user from "../assets/icons/user.png";
import report from "../assets/icons/report.png";
import graduation from "../assets/icons/graduation.png";






export default function Grid() {
  return (
    <div className="grid">

      <div className="design">
        <div className="head">
          <div className="icon">
            <img width={20} height={20} src={paintbrush} alt="" />
          </div>
          <h1>Design</h1>
        </div>
        <button>4 open position</button>
      </div>

      <div className="engineering">
        <div className="head">
          <div className="icon">
            <img width={20} height={20} src={coding} alt="" />
          </div>
          <h1>Engineering</h1>
        </div>
        <button>8 open position</button>
      </div>

      <div className="operations">
        <div className="head">
          <div className="icon">
            <img width={20} height={20} src={setting} alt="" />
          </div>
          <h1>Operations</h1>
        </div>
        <button>2 open position</button>
      </div>

      <div className="people">
        <div className="head">
          <div className="icon">
            <img width={20} height={20} src={user} alt="" />
          </div>
          <h1>People</h1>
        </div>
        <button>6 open position</button>
      </div>

      <div className="sales">
        <div className="head">
          <div className="icon">
            <img width={20} height={20} src={report} alt="" />
          </div>
          <h1>Sales</h1>
        </div>
        <button>7 open position</button>
      </div>

      <div className="university">
        <div className="head">
          <div className="icon">
            <img width={20} height={20} src={graduation} alt="" />
          </div>
          <h1>University</h1>
        </div>
        <button>8 open position</button>
      </div>

    </div>
  );
}
