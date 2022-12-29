/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { isMobile } from 'react-device-detect';

function SubscribeModal({ screens, currentScreen, children, closedJoinedWaitListModal }) {
  const runCloseSuccessSubModal = () => {
    if (currentScreen === 'success') {
      closedJoinedWaitListModal();
    }
  };
  return (
    <div className="modal fade" id="modal" tabIndex="-1" role="dialog">
      <div
        className={`modal-dialog ${isMobile ? '' : 'modal-dialog-centered'}`}
        style={{ minHeight: '100vh' }}
        role="document">
        <div className="modal-content" style={{ minHeight: isMobile ? '100vh' : '' }}>
          <span
            type="button"
            role="button"
            tabIndex={0}
            className="close d-block w-100 text-end pe-3"
            data-dismiss="modal"
            aria-label="Close"
            onClick={runCloseSuccessSubModal}>
            <img alt="Close" src="/assets/images/close.svg" className="p-2" />
          </span>
          <div className="modal-body">{children[screens.indexOf(currentScreen)]}</div>
        </div>
      </div>
    </div>
  );
}

SubscribeModal.propTypes = {
  children: PropTypes.array.isRequired,
  currentScreen: PropTypes.string.isRequired,
  screens: PropTypes.array.isRequired,
  closedJoinedWaitListModal: PropTypes.func.isRequired,
};

export default SubscribeModal;
