import React, { Component } from "react";
import { IState } from '../../../../type/IState';
import { IDay } from '../../../../type/IDay';



interface IProps {
  day: IDay;
}

export default class CalendarBodySection extends React.Component <IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="calendarBodySection">
         <div className='calendarDay'>{this.props.day.day}</div>
      </div>
    );
  }
}
