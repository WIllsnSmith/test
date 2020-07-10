import React from "react";

const Name = (props) => {
  const data = props.data;
  return (
    <>
      <label htmlFor="inlineFormInput" className="name">
        Name
      </label>
      <input
        type="text"
        className="form-control"
        id="inlineFormInput"
        placeholder="Jane Doe"
      />
    </>
  );
};

export default Name;