import React, { Component } from "react";

class HeaderTitle extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="headerTitle">
        <div className="headerData">
          <div className="headerDataMonth">October</div>
          <div className="headerDataYear">2018</div>
        </div>
          <ul className="headerTypeData">
            <li>Day</li>
            <li>Week</li>
            <li>Month</li>
            </ul>
        <div className="headerToggleData">Today</div>
      </div>
    );
  }
}

export default HeaderTitle;
