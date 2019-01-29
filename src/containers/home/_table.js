import React, { Component } from "react";
import get from "lodash/get";
export default class Table extends Component {
  renderCol = (item, index) => {
    return (
      <div className="col-3 item" key={index}>
        {`${item[0]} ${this.renderSymbol()} ${item[1]} =`}
      </div>
    );
  };
  renderSymbol = () => {
    const operate = get(this.props, "data.operate");
    switch (operate) {
      case "additive":
        return "+";
      case "subtraction":
        return "-";
      default:
        return "";
    }
  };
  render() {
    const list = get(this.props, "data.list", []);
    return <div className="row">{list.map(this.renderCol)}</div>;
  }
}
