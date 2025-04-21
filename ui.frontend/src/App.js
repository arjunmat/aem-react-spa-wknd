import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
