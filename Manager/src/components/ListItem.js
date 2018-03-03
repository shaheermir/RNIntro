import React from 'react'
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux'
import { Text, TouchableOpacity } from 'react-native'

import { CardSection } from './common'

class ListItem extends React.Component {
  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee })
  }

  render () {
    const { name } = this.props.employee

    return (
      <TouchableOpacity onPress={this.onRowPress}>
        <CardSection>
          <Text style={styles.title}>{name}</Text>
        </CardSection>
      </TouchableOpacity>
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
