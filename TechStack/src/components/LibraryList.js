import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import ListItem from './ListItem'

class LibraryList extends React.Component {
  renderRow (library) {
    return <ListItem library={library.item} />
  }

  render () {
    return <FlatList data={this.props.libraries} renderItem={this.renderRow} />
  }
}

LibraryList.propTypes = {
  libraries: PropTypes.array
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  }
}

export default connect(mapStateToProps)(LibraryList)
