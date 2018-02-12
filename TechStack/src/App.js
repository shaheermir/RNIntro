import React from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import { Header } from './components/common'

const store = createStore(reducers)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View>
          <Header headerText='Tech Stack' />
        </View>
      </Provider>
    )
  }
}
