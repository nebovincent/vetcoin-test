import React, { useState } from 'react';
import SubscribeModal from './modals';
import { MODAL_SCREENS } from './modals/constants';
import SubscribeForm from './modals/subscribeForm';
import Success from './modals/success';
import FaqModal from './modals/faq';
import { TermsConditions, Cover, Header, Card, Features, Note, Footer } from './partials';
import PageLayout from './partials/Layout';

const Landing = () => {
  const [currentScreen, setCurrentScreen] = useState(MODAL_SCREENS[0]);
  const [joinedWaitList, setJoinedWaitList] = useState(false);
  const [joined, setJoined] = useState(false);
  console.log(joinedWaitList, 'joined email wait list');
  const emailSubmitted = () => {
    setJoinedWaitList(true);
  };
  const signOutHandler = () => {
    setJoinedWaitList(false);
    setJoined(false);
    setCurrentScreen(MODAL_SCREENS[0]);
  };

  const closedJoinedWaitListModal = () => {
    setJoined(true);
  };

  return (
    <PageLayout>
      <Header signOutHandler={signOutHandler} joined={joined} />
      <Cover />
      <Card />
      <Features />
      <Note />
      <Footer />
      <SubscribeModal
        screens={MODAL_SCREENS}
        currentScreen={currentScreen}
        closedJoinedWaitListModal={closedJoinedWaitListModal}>
        <SubscribeForm onChangeScreen={setCurrentScreen} emailSubmitted={emailSubmitted} />
        <Success
          onChangeScreen={setCurrentScreen}
          closedJoinedWaitListModal={closedJoinedWaitListModal}
        />
      </SubscribeModal>
      <TermsConditions />
      <FaqModal />
    </PageLayout>
  );
};

export default Landing;
