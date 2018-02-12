import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import LibraryList from './components/LibraryList'
import { Header } from './components/common'

const store = createStore(reducers)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header headerText='Tech Stack' />
          <LibraryList />
        </View>
      </Provider>
    )
  }
}
