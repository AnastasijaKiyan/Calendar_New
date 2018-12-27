import React, { Component } from 'react';
// import { CalendarHeader } from './calendarHeader';
import { CalendarBody } from './calendarBody/calendarBody';
import { IDay } from '../../type/IDay'
import dataDay from '../../data/dataday';
import CalendarHeader from './calendarHeader/calendarHeader';

class CalendarMonth extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    let d: IDay[] = dataDay;
    return (
      <div className="calendarMonth">
        <CalendarHeader/>
        <CalendarBody days={d} />
      </div>
    );
  }
}

export default CalendarMonth;