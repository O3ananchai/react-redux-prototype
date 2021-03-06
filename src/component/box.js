import React from "react";

class Box extends React.Component {
  render() {
    console.log(`props` + this.props.handleClick);
    return (
      <div className="wrapper">
        <div
          style={{
            backgroundColor: `${this.props.color}`
          }}
          className="box"
        >
          <button
            onClick={() => {
              this.props.handleClick();
            }}
            disabled={this.props.disable}
          >
            Change Color
          </button>
        </div>
      </div>
    );
  }
}

export default Box;
