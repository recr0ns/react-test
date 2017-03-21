import React, { Component } from 'react';
import { connect } from 'react-redux';
import { items } from '../../actions';
import HeaderBlock from '../../components/header_block';
import ItemsBlock from '../../containers/items_block';

class Todo extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <div className="todo__header">
          <HeaderBlock />
        </div>
        <div className="todo__body">
          <ItemsBlock />
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  fetchItems: React.PropTypes.func.isRequired,
};

Todo.defaultProps = {
  fetchItems: () => { return []; },
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => { dispatch(items.listItems()); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
