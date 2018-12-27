import React, { Component } from "react";

class HeaderButtons extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="headerButtons">
        <input type="button" value="Properties" />
        <input type="button" value="Calendar" />
        <input type="button" value="Logs" />
      </div>
    );
  }
}

export default HeaderButtons;
