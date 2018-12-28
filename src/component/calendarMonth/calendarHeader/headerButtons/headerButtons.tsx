import React, { Component } from "react";

interface Button {
  id: number;
  name: string
}

type Props = { };
type State = { buttonSelectedId: number };

class HeaderButtons extends Component <Props, State> {

  private buttons: Button[] = [];

  constructor(props: Props) {
    super(props);
    this.state = {buttonSelectedId: 2};
  this.buttons.push({ id: 1, name: "Properties" }, { id: 2, name: "Calendar" }, { id: 3, name: "Logs"});
  }

  press(id: number, e: React.MouseEvent<HTMLInputElement>):void {
    this.setState({buttonSelectedId: id});
  }

  render() {
    return (
      <div className="headerButtons">
      {
        this.buttons.map((item: Button) => <input key={item.id} className={this.state.buttonSelectedId == item.id ? "clicked" : ""}
         type="button" name={String(item.id)} value={item.name} onClick={e => this.press(item.id, e)}/>)
      }
      </div>
    );
  }
}

export default HeaderButtons;
