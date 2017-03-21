import { connect } from 'react-redux';
import ItemsBlock from '../components/items_block';
import { items } from '../actions';

function mapStateToProps(state) {
  return {
    items: state.app.get('items').toJS().filter(i => (!i.completed)),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createItem: () => dispatch(items.appendItem()),
    toggleItem: (id, completed) => dispatch(items.toggleItem({ id, completed })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsBlock);
