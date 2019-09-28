import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions } from 'modules/faces';

import AddFaces from './AddFaces';


const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  onFacesMerge: actions.facesMergeRequest,
  onGetHistory: actions.facesGetHistoryRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(AddFaces);