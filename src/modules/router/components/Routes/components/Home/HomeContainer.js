import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors } from 'modules/user';

import Home from './Home';


const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectors.getIsAuth,
});


export default connect(mapStateToProps)(Home);
