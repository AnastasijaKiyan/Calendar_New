import React, { Component } from "react";
import HeaderButtons from "./headerButtons/headerButtons";
import HeaderTitles from "./headerTitle/headerTitle";
import HeaderWeekDays from "./headerWeekDays/headerWeekDays";

class CalendarHeader extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="calendarHeader">
        <HeaderButtons />
        <HeaderTitles />
        <HeaderWeekDays />
      </div>
    );
  }
}

export default CalendarHeader;
