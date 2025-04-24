import { Page, withModel } from '@adobe/aem-react-editable-components';
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import { initAlloy, trackPageView } from "./utils/adobeAlloy";

const AppInit = () => {
  useEffect(() => {
    initAlloy();
  }, []);

  return null;
};

const PageView = () => {
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return null;
};

// This component is the application entry point
class App extends Page {

  render() {
    return (
      <div>
        <AppInit />
        <PageView />
        <Header />
        <Banner />
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
