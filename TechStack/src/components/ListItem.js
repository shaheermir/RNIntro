import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, LayoutAnimation } from 'react-native'

import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends React.Component {
  componentWillUpdate () {
    LayoutAnimation.spring()
  }

  renderDescription () {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text>{this.props.library.description}</Text>
        </CardSection>
      )
    }
  }

  render () {
    const { titleStyle } = styles
    const { library, selectLibrary } = this.props

    return (
      <TouchableOpacity onPress={() => selectLibrary(library.id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{library.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableOpacity>
    )
  }
}

ListItem.propTypes = {
  library: PropTypes.object.isRequired,
  selectLibrary: PropTypes.func.isRequired,
  expanded: PropTypes.bool
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    expanded: state.selectedLibraryID === ownProps.library.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectLibrary: id => dispatch(actions.selectLibrary(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
