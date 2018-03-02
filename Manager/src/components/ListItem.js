import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import { CardSection } from './common'

class ListItem extends React.Component {
  render () {
    const { name } = this.props.employee

    return (
      <CardSection>
        <Text style={styles.title}>{name}</Text>
      </CardSection>
    )
  }
}

ListItem.propTypes = {
  employee: PropTypes.object
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem
