/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Modal = (props) => {
  // update the className of returned div on true/false value of show
  // show is passed down as props to Modal in Profile.js (near line 97)
  const showHideClassName = props.show ? 'modalShow' : 'modalHide';

  return (
    <div className={showHideClassName}>
      <div className="modal-container">{props.children}</div>
    </div>
  );
};

export default Modal;
