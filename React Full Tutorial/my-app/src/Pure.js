import React, { PureComponent } from "react";

export default class Pure extends PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}
