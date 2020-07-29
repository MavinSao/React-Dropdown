import React from "react";

const Checkbox = (props) => <input type="checkbox" {...props} />;

function Multi() {
  return (
    <div>
      <label>
        <Checkbox
        //   checked={this.state.checked}
        //   onChange={this.handleCheckboxChange}
        />{" "}
        &nbsp;
        <span>Answer 1</span>
      </label>{" "}
      <br />
      <label>
        {" "}
        <Checkbox
        //   checked={this.state.checked}
        //   onChange={this.handleCheckboxChange}
        />{" "}
        &nbsp;
        <span>Answer 2</span>
      </label>{" "}
      <br />
      <label>
        <Checkbox
        //   checked={this.state.checked}
        //   onChange={this.handleCheckboxChange}
        />{" "}
        &nbsp;
        <span>Answer 3</span>
      </label>
    </div>
  );
}

export default Multi;
