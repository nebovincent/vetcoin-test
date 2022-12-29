import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';

const Success = ({ closedJoinedWaitListModal }) => (
  <OutsideClickHandler onOutsideClick={closedJoinedWaitListModal}>
    <div className="form">
      <p className="text-f5">Thanks for joining!</p>
      <div className="text-center">
        <img className="success-icon" alt="Success" src="/assets/images/success.svg" />
      </div>
      <p className="header upper-case text-h1">Validate your email</p>
      <p className="text-f5">
        Check your email to validate it and secure your spot on the waitlist.
      </p>
    </div>
  </OutsideClickHandler>
);
Success.propTypes = {
  closedJoinedWaitListModal: PropTypes.func.isRequired,
};

export default Success;
