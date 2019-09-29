import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions, selectors } from 'modules/faces';

import AddFaces from './AddFaces';


const mapStateToProps = createStructuredSelector({
  resultImageUrl: selectors.getResultImageUrl,
  isRetrieving: selectors.getIsRetrieving,
  isGenerating: selectors.getIsGenerating,
});

const mapDispatchToProps = {
  onFacesMerge: actions.facesMergeRequest,
  onGetHistory: actions.facesGetHistoryRequest,
  onReset: actions.facesReset,
  onOpenModal: actions.facesModalOpen,
};


export default connect(mapStateToProps, mapDispatchToProps)(AddFaces);
