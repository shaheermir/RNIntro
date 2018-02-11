import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const CardSection = props => {
  console.log('CardSection props')
  console.log(props.children)
  return <View style={styles.containerStyles}>{props.children}</View>
}

const styles = StyleSheet.create({
  containerStyles: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative'
  }
})

CardSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default CardSection
