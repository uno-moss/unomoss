/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Modal from './ProfileModal';
import styles from '../../styles/modal.scss';

const Profile = () => {
  // hook that stores the state of user info
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    zipCode: '',
  });
  const { username, email, password, zipCode } = user;

  // hook that stores the user input when updating account in modal
  const [userModal, setModal] = useState({
    modal: false,
    newUsername: '',
    newEmail: '',
    newPassword: '',
    newZipCode: '',
  });
  const { modal, newUsername, newEmail, newPassword, newZipCode } = userModal;

  // on page mount: fetch user data and set user state with response
  // if you're unfamiliar with hooks: setting second arg to empty array sets code (fetch) to run on page load/mount
  useEffect(() => {
    fetch('/profile').then((res) =>
      res
        .json()
        .then((data) => setUser(data))
        .catch((error) =>
          console.log('Error retreiving user information', error)
        )
    );
  }, []);

  // closes the modal box on button click by setting modal value to false
  function modalClose() {
    setModal((prevState) => {
      return { ...prevState, modal: false };
    });
  }

  // opens the modal box on link click by setting modal value to true
  function modalOpen() {
    console.log('clicked modal open!');
    setModal((prevState) => {
      return { ...prevState, modal: true };
    });
    console.log(userModal);
  }

  // sets modal state to input values added by user in modal input boxes
  function handleChange(e) {
    setModal({ [e.target.name]: e.target.value });
  }

  // submits the modal state (new user information values) to the db with fetch POST
  // stores the response data (updated user info) as the new state within user
  function handleSubmit(e) {
    e.preventDefault();
    const { newUsername, newEmail, newPassword, newZipCode } = userModal;

    fetch('/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        newUsername,
        newEmail,
        newPassword,
        newZipCode,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((err) => console.log('Error updating user information', err));
    // close the modal box after submitting the update user information
    modalClose();
  }
  console.log(modal);
  return (
    <div>
      <h1>Profile page</h1>
      <ul className="userInfo">
        <li>Username: {username}</li>
        <li>Email: {email}</li>
        <li>Password: {password}</li>
        <li>Zip code: {zipCode}</li>
      </ul>
      <button type="button" className="changeInfoButton" onClick={modalOpen}>
        Change Account Info
      </button>
      <Modal show={modal} handleClose={modalClose}>
        <h3>Update Your Account Information</h3>
        <form className="infoUpdateForm">
          <label>Username: </label>
          <input
            type="text"
            name="newUsername"
            value={newUsername}
            onChange={handleChange}
          />

          <label>Email: </label>
          <input
            type="text"
            name="newEmail"
            value={newEmail}
            onChange={handleChange}
          />

          <label>Password: </label>
          <input
            type="text"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
          />

          <label>Zip Code: </label>
          <input
            type="text"
            name="newZipCode"
            value={newZipCode}
            onChange={handleChange}
          />

          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
          <button type="button" className="modal-close" onClick={modalClose}>
            close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Profile;
