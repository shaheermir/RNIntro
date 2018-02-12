import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const Header = props => {
  const { textStyle, viewStyle } = styles
  const { headerText } = props

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired
}

export { Header }
