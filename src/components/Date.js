import React from "react";

const Date = props => (
  <form onSubmit={props.changeDate}>
    Enter a date (YYYY-MM-DD):
    <input />
    <input type="submit" />
  </form>
);
export default Date;