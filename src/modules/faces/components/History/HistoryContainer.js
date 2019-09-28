import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions, selectors } from 'modules/faces';

import History from './History';


const mapStateToProps = createStructuredSelector({
  historyById: selectors.getHistoryById,
  historyIds: selectors.getHistoryIds,
  historyIsFetching: selectors.getHistoryIsFetching,
});

const mapDispatchToProps = {
  onGetHistory: actions.facesGetHistoryRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(History);
