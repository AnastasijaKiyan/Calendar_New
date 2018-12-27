import React, { Component } from 'react';
import { IDay } from '../../../type/IDay';
import { IState } from '../../../type/IState'
import dataDay from '../../../data/dataday';
import { render } from 'react-dom';
import CalendarBodySection from './calenarBodySection/calendarBodySection';

interface IProps {
  days: IDay[];
}

export class CalendarBody extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    /*
    if (props.days.length != 42) {
      throw Error("Array's lenght must be only 42");
    } */
    super(props);
  }

  render() {
    return (
      <div className="calendarBody">
        {
          this.props.days.map((day): JSX.Element => {
            return (
                <CalendarBodySection key={day.id} day={day} />
            )
          })
        }
      </div>
    );
  }
}
