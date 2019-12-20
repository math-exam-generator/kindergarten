import React, { Component } from "react";
import get from "lodash/get";
export default class Table extends Component {
  renderCol = (item, index) => {
    return (
      <div className="col-3 item" key={index}>
        {`${item[0]} ${item[1]} ${item[2]} =`}
      </div>
    );
  };

  render() {
    const list = get(this.props, "data.list", []);
    return <div className="row">{list.map(this.renderCol)}</div>;
  }
}
