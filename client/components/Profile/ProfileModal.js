/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Modal = (props) => {
  // update the className of returned div based on true/false value of show
  // show is passed down as props to Modal in Profile.js
  const showHideClassName = props.show ? 'modalShow' : 'modalHide';

  // modal functions as a "wrapper" around HTML children
  // wraps the form/input fields for user information within profile.js
  return (
    <div className={showHideClassName}>
      <div className="modal-container">{props.children}</div>
    </div>
  );
};

export default Modal;
