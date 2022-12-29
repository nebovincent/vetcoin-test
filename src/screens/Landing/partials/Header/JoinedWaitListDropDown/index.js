import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.module.scss';

function JoinedWaitListDropDown({ signOutHandler }) {
  return (
    <div className={classes.main_container}>
      <ul>
        <li>
          <a
            href="https://vetcoin-members.sentinel-digital.com/?uid=O5mI1RTa2StybzhsTTle"
            target="_blank"
            rel="noreferrer">
            Members Area
          </a>
        </li>
        <li>Check your rank</li>
        <li>Change Password</li>
        <li>
          <div
            role="button"
            tabIndex="0"
            onClick={() => {
              signOutHandler();
            }}>
            Sign out
          </div>
        </li>
      </ul>
    </div>
  );
}

JoinedWaitListDropDown.propTypes = {
  signOutHandler: PropTypes.func.isRequired,
};

export default JoinedWaitListDropDown;
