import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImArrowDown } from 'react-icons/im';
import OutsideClickHandler from 'react-outside-click-handler';
import classes from './JoinedWaitListDropDown/index.module.scss';
import JoinedWaitListDropDown from './JoinedWaitListDropDown';
import { links } from '../../../../utils/constants';
import { SectionContainer } from '../Layout';

function Header({ signOutHandler, joined }) {
  const [joinedWaitListDropDownState, setJoinedWaitListDropDownState] = useState(false);
  const toggleJoinedWaitListDropDown = () => {
    setJoinedWaitListDropDownState(!joinedWaitListDropDownState);
  };
  const closeJoinedWaitListDropDown = () => {
    setJoinedWaitListDropDownState(false);
  };
  return (
    <>
      <SectionContainer className="bg-dark">
        <div className="wl-header py-4">
          <a href={links.sntnl} target="_blank" rel="noreferrer">
            <img
              src="/assets/images/logo.png"
              className="img-fluid"
              alt="VETCOIN"
              style={{ maxWidth: 220 }}
            />
          </a>
          <div className="d-flex justify-content-center align-items-center">
            {!joined ? (
              <button
                className="btn btn-responsive"
                type="button"
                data-toggle="modal"
                data-target="#modal">
                Join waitlist
              </button>
            ) : (
              <OutsideClickHandler
                onOutsideClick={() => {
                  closeJoinedWaitListDropDown();
                }}>
                <div
                  className={classes.welcome_user_text}
                  role="button"
                  onClick={() => {
                    toggleJoinedWaitListDropDown();
                  }}
                  tabIndex="0">
                  Welcome John <ImArrowDown />
                </div>
                {joinedWaitListDropDownState && (
                  <JoinedWaitListDropDown signOutHandler={signOutHandler} />
                )}
              </OutsideClickHandler>
            )}
          </div>
        </div>
      </SectionContainer>
      <div className="wl-header-hr" />
    </>
  );
}
Header.propTypes = {
  signOutHandler: PropTypes.func.isRequired,
  joined: PropTypes.bool.isRequired,
};
export default Header;
