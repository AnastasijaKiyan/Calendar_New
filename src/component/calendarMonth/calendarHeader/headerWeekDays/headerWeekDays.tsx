import React, { Component } from "react";

class HeaderWeekDays extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
        <ul className="headerWeekDays">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wen</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
        </ul>
    );
  }
}

export default HeaderWeekDays;
