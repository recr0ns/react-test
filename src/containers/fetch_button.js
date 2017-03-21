import { connect } from 'react-redux';
import { fetchUser } from '../actions/_user';
import FetchButton from '../components/fetch_button';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onFetch: () => { dispatch(fetchUser()); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchButton);
