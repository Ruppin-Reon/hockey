import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Ncaa_Navigation';
import Footer from '../components/Footer';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Ncaa_hockey = () => (
  <AppWrapper>
    <Navigation />
    <MainContent>
      <Outlet />
    </MainContent>
    <Footer />
  </AppWrapper>
);

export default Ncaa_hockey;
