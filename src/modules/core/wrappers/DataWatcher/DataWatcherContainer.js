import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions, selectors } from 'modules/faces';

import DataWatcher from './DataWatcher';


const mapStateToProps = createStructuredSelector({
  currentProgress: selectors.getCurrentProgress,
  currentResultPath: selectors.getCurrentResultPath,
});

const mapDispatchToProps = {
  onResultProgress: actions.facesMergeProgress,
  getResult: actions.facesGetResultRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(DataWatcher);
