import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common/Header';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      {/* vvv style prevents scrolling from being cut off half page */}
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
